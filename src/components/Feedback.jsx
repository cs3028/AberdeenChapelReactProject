import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebaseConfig';
import '../feedback.css';

const Feedback = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Firebase when component mounts
  // useEffect(() => {
  //   const firebaseConfig = {
  //       apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //       authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //       projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //       storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //       messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //       appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //       measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  //   };
  //
  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);
  //   
  //   // Initialize Firestore
  //   const firestore = getFirestore(app);
  //   setDb(firestore);
  //   
  //   console.log("Firebase initialized successfully.");
  // }, []);

  // Handle star hover
  const handleStarHover = (value) => {
    const stars = document.querySelectorAll('.stars i');
    stars.forEach(star => {
      const starValue = parseInt(star.getAttribute('data-value'));
      if (starValue <= value) {
        star.classList.add('selected');
        star.classList.remove('text-gray-300');
      } else {
        star.classList.remove('selected');
        star.classList.add('text-gray-300');
      }
    });
  };

  // Handle star click
  const handleStarClick = (value) => {
    setCurrentRating(value);
  };

  // Handle star mouse out
  const handleStarMouseOut = () => {
    handleStarHover(currentRating);
  };

  // Submit feedback
  const handleSubmit = async () => {
    // if (!db) {
    //   setMessage({ text: 'Error: Database not connected.', type: 'error' });
    //   return;
    // }
    
    if (currentRating === 0) {
      setMessage({ text: 'Please select a star rating.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ text: 'Sending feedback...', type: 'info' });

    
    // rating: currentRating,
    // text: feedbackText.trim(),
    // timestamp: new Date(),
    // url: window.location.href,
    try {
      const feedbackData = { /*...*/ };
      // Add to Firestore collection
      await addDoc(collection(db, "feedback"), feedbackData);
      console.log("Feedback submitted successfully:", feedbackData);
      setMessage({ text: 'Thank you for your feedback!', type: 'success' });
      // Reset form after successful submission
      setTimeout(() => {
        setCurrentRating(0);
        setFeedbackText('');
        handleStarHover(0);
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage({ 
        text: 'Error submitting feedback. Please try again.', 
        type: 'error' 
      });
    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-content">
        <h2 className="feedback-title">Rate Your Experience</h2>
        
        <div className="rating-container">
          <p>How would you rate this?</p>
          <div 
            className="stars"
            onMouseOut={handleStarMouseOut}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <i 
                key={value}
                className={`fa-solid fa-star ${currentRating >= value ? 'selected' : ''}`}
                data-value={value}
                onMouseOver={() => handleStarHover(value)}
                onClick={() => handleStarClick(value)}
              ></i>
            ))}
          </div>
        </div>

        <div className="feedback-text-container">
          <label htmlFor="feedbackText">
            Additional Feedback (Optional):
          </label>
          <textarea 
            id="feedbackText" 
            rows="4" 
            className="feedback-textarea"
            placeholder="Tell us more..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
        </div>

        <div className="submit-container">
          <button 
            onClick={handleSubmit}
            disabled={currentRating === 0 || isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {message.text && (
          <div className={`feedback-message ${
            message.type === 'success' ? 'success' : 
            message.type === 'error' ? 'error' : 'info'
          }`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
