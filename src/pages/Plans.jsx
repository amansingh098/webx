import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Plans.css'; // Import the CSS file

const Plans = () => {
  const navigate = useNavigate();

  const handlePlanSelection = async (plan, amount) => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
      return;
    }

    const totalAmount = amount + 20; // Adding GST of 20 Rs

    try {
      await addDoc(collection(db, 'userPlans'), {
        userId: user.uid,
        plan,
        amount: totalAmount,
      });

      // Redirect to the specific payment link for each plan
      if (plan === 'basic') {
        window.location.href = 'https://payments.cashfree.com/forms/Jobindeed';
      } else if (plan === 'pro') {
        window.location.href = 'https://payments.cashfree.com/forms/jobindeedproplan'; // Replace with actual Pro plan link
      } else if (plan === 'pro-plus') {
        window.location.href = 'https://payments.cashfree.com/forms/proplus'; // Replace with actual Pro Plus plan link
      }
    } catch (error) {
      console.error('Error saving plan: ', error);
    }
  };

  return (
    <div className="plans-container">
      <Navbar />
      <div className="plans-content">
        <h1 className="plans-title">
          Choose Your Job Plan
        </h1>
        <div className="plans-grid">
          {[
            { name: 'Basic', price: 499, description: 'Job Application', benefits: ['Automatic Apply', 'Personal Dashboard', 'Daily Updates', '100+ Companies Applied'], amount: 300 },
            { name: 'Pro', price: 899, description: 'Advanced Job Application', benefits: ['Automatic Apply by AI', 'Email Updates', 'Personal Dashboard', 'Customer Service Support', '150+ Companies Applied'], amount: 799 },
            { name: 'Pro Plus', price: 1299, description: 'Comprehensive Job Assistance', benefits: ['All Recent Job Updates', 'Personal Dashboard', 'Customer Service Support', 'Personal Updates', '100% Placement Guarantee', 'Chance to Appear for Interviews', 'Resume Building', '200+ Companies Applied'], amount: 999 }
          ].map((plan, index) => (
            <div key={index} className="plan-card">
              <div className="plan-details">
                <h2 className="plan-name">{plan.name}</h2>
                <p className="plan-description">{plan.description}</p>
                <p className="plan-price">₹{plan.price}</p>
                <p className="plan-duration">1 Month</p>
                <ul className="plan-benefits">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}><span className="plan-checkmark">✔</span>{benefit}</li>
                  ))}
                </ul>
              </div>
              <button
                className="plan-button"
                onClick={() => handlePlanSelection(plan.name.toLowerCase(), plan.amount)}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
