import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { storage, db, auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import qr from '../assets/qr.jpeg';

const PaymentMethods = () => {
  const { plan } = useParams();
  const [utr, setUtr] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [notification, setNotification] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const planDetails = {
    'basic': { name: 'Basic', price: 499, gst: 9 },
    'pro': { name: 'Pro', price: 899, gst: 5 },
    'pro-plus': { name: 'Pro Plus', price: 1299, gst: 7 },
  };

  useEffect(() => {
    const selectedPlan = planDetails[plan];
    if (selectedPlan) {
      setTotalAmount(selectedPlan.price + selectedPlan.gst);
    }
  }, [plan]);

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (utr && screenshot) {
      try {
        const user = auth.currentUser;
        if (!user) {
          setNotification('Please login to submit payment.');
          return;
        }

        // Upload screenshot to Firebase Storage
        const storageRef = ref(storage, `screenshots/${screenshot.name}`);
        await uploadBytes(storageRef, screenshot);
        const downloadURL = await getDownloadURL(storageRef);

        // Store UTR and screenshot URL in Firestore
        await addDoc(collection(db, 'payments'), {
          utr,
          screenshotUrl: downloadURL,
          plan,
          totalAmount,
          userId: user.uid,
        });

        setNotification('You will receive an email with login details within 24 hours.');
      } catch (error) {
        console.error('Error submitting payment:', error);
        setNotification('Error submitting payment. Please try again.');
      }
    } else {
      setNotification('Please provide UTR number and screenshot.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/2">
          <img src="https://img.freepik.com/premium-photo/beautiful-neon-cat-animal-digital-art-generative-ai_880278-819.jpg" alt="Side Image" className="h-full w-full object-cover" />
        </div>
        <div className="flex-grow flex flex-col items-center justify-center p-4 lg:w-1/2">
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-xl w-full p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">{planDetails[plan]?.name} Plan</h2>
            <p className="text-lg mb-4">₹{planDetails[plan]?.price} + ₹{planDetails[plan]?.gst} GST</p>
            <p className="text-xl font-bold mb-4">Total Amount: ₹{totalAmount}</p>
            <p className="text-gray-400 mb-4">Thank you for choosing our plan. Click the button below to proceed with the payment.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Pay Now
            </button>
            <h2 className="text-2xl font-semibold mt-6 mb-4">UPI Payment</h2>
            <p className="text-lg mb-4">UPI ID: <span className="font-bold">myluckeystar@ybl</span></p>
            <div className="flex justify-center mb-4">
              <img src={qr} alt="QR Code" className="w-48 h-48" />
            </div>
            <div className="flex flex-wrap justify-center space-x-4 p-4 bg-gray-700 rounded-lg">
              <img src="https://www.theindianwire.com/wp-content/uploads/2019/03/ptm1.jpg" alt="Paytm" className="h-12 md:h-16" />
              <img src="https://entrepreneurnewsnetwork.com/wp-content/uploads/2022/10/1616131994_Jp6GOb_phonepe.webp" alt="PhonePe" className="h-12 md:h-16" />
              <img src="https://9to5google.com/wp-content/uploads/sites/4/2020/11/GP3Long.png" alt="Google Pay" className="h-12 md:h-16" />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter UTR number"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
                className="mb-4 p-2 bg-gray-700 rounded-lg w-full"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="mb-4 p-2 bg-gray-700 rounded-lg w-full"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
              {notification && (
                <p className="mt-4 text-green-500">{notification}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMethods;
