import React from 'react';
import './help.css';
import Footer from './Footer';


const HelpPage = () => {
  return (
    <div className="help-container">
    
      
      <main>
        <h1>Help & Support</h1>
        <p>
          Welcome to the Help Page. Here you'll find answers to common questions and guidance on how to use our app.
        </p>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><strong>How do I reset my password?</strong><br />Go to the login page and click "Forgot Password".</li>
            <li><strong>How can I contact support?</strong><br />Email us at <a href="mailto:support@example.com">support@example.com</a>.</li>
            <li><strong>Where can I find my profile settings?</strong><br />Click on your avatar in the top-right corner and select "Settings".</li>
          </ul>
        </section>

        <section>
          <h2>Need More Help?</h2>
          <p>
            If your question isn’t listed, feel free to contact us directly: <ul>Tel: +44 (0)1224 272000.</ul>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HelpPage;

