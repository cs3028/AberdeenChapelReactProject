// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // import query and orderBy
import { signOut } from 'firebase/auth';
import { db, auth } from '../firebaseConfig'; // adjust path if needed
import '../Dashboard.css'; // for styling

const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedback = async () => {
      setIsLoading(true);
      setError(''); // clear previous errors
      try {
        // create a query to get feedback, ordered by timestamp descending
        const feedbackColRef = collection(db, 'feedback');
        const q = query(feedbackColRef, orderBy('timestamp', 'desc')); // order by newest first

        const querySnapshot = await getDocs(q);
        const feedbackData = querySnapshot.docs.map(doc => ({
          id: doc.id, // include the document id
          ...doc.data(),
          // convert firestore timestamp to js date object if it's not already
          timestamp: doc.data().timestamp?.toDate ? doc.data().timestamp.toDate() : new Date() // handle potential missing or non-timestamp field
        }));
        setFeedbackList(feedbackData);
      } catch (err) {
        console.error("Error fetching feedback:", err);
        setError('Failed to load feedback data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // redirect to login page after logout
    } catch (err) {
      console.error("Logout failed:", err);
      // optionally show an error message to the user
      setError('Logout failed. Please try again.');
    }
  };

  // helper function to format dates (optional but nice)
  const formatDate = (date) => {
    if (!date || !(date instanceof Date)) return 'Invalid date';
    // example format: May 3, 2025, 12:33 PM
    // 'en-GB' uses day/month/year
    return date.toLocaleString('en-GB', {
      dateStyle: 'medium', // 3 May 2025
      timeStyle: 'short',  // 12:33
      hour12: true         // AM/PM
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
