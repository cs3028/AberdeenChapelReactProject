// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // Import query and orderBy
import { signOut } from 'firebase/auth';
import { db, auth } from '../firebaseConfig'; // Adjust path if needed
import '../Dashboard.css'; // For styling

const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start loading initially
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch feedback data when the component mounts
  useEffect(() => {
    const fetchFeedback = async () => {
      setIsLoading(true);
      setError(''); // Clear previous errors
      try {
        // Create a query to get feedback, ordered by timestamp descending
        const feedbackColRef = collection(db, 'feedback');
        const q = query(feedbackColRef, orderBy('timestamp', 'desc')); // Order by newest first

        const querySnapshot = await getDocs(q);
        const feedbackData = querySnapshot.docs.map(doc => ({
          id: doc.id, // Include the document ID
          ...doc.data(),
          // Convert Firestore Timestamp to JS Date object if it's not already
          timestamp: doc.data().timestamp?.toDate ? doc.data().timestamp.toDate() : new Date() // Handle potential missing or non-timestamp field
        }));
        setFeedbackList(feedbackData);
      } catch (err) {
        console.error("Error fetching feedback:", err);
        setError('Failed to load feedback data. Please try again later.');
      } finally {
        setIsLoading(false); // Set loading to false whether success or error
      }
    };

    fetchFeedback();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after logout
    } catch (err) {
      console.error("Logout failed:", err);
      // Optionally show an error message to the user
      setError('Logout failed. Please try again.');
    }
  };

  // Helper function to format dates (optional but nice)
  const formatDate = (date) => {
    if (!date || !(date instanceof Date)) return 'Invalid date';
    // Example format: May 3, 2025, 12:33 PM (using current time as example)
    // Locale 'en-GB' uses day/month/year common in the UK
    return date.toLocaleString('en-GB', {
      dateStyle: 'medium', // e.g., 3 May 2025
      timeStyle: 'short',  // e.g., 12:33
      hour12: true       // Use AM/PM if preferred, set to false for 24-hour
    });
  };


  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>

      <section className="feedback-section">
        <h2>User Feedback</h2>
        {isLoading && <p>Loading feedback...</p>}
        {error && <p className="error-message" role="alert">{error}</p>}

        {!isLoading && !error && feedbackList.length === 0 && (
          <p>No feedback submitted yet.</p>
        )}

        {!isLoading && !error && feedbackList.length > 0 && (
          <ul className="feedback-list">
            {feedbackList.map(feedback => (
              <li key={feedback.id} className="feedback-item">
                <div className="feedback-item-header">
                  <span className="feedback-rating">Rating: {'⭐'.repeat(feedback.rating)} ({feedback.rating}/5)</span>
                  <span className="feedback-timestamp">{formatDate(feedback.timestamp)}</span>
                </div>
                {feedback.text && (
                  <p className="feedback-text">{feedback.text}</p>
                )}
                 {/* Optionally display other data like the URL */}
                 {feedback.url && (
                   <p className="feedback-url">Submitted on: <a href={feedback.url} target="_blank" rel="noopener noreferrer">{feedback.url}</a></p>
                 )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
