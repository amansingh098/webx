import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const PaymentMethods = () => {
  const { plan } = useParams();
  const [utr, setUtr] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [notification, setNotification] = useState('');

  const planDetails = {
    '399': '₹399/Year Plan',
    '599': '₹599/Year Plan',
    '999': '₹999/Year Plan',
  };

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (utr && screenshot) {
      try {
        // Upload screenshot to Firebase Storage
        const storageRef = ref(storage, `screenshots/${screenshot.name}`);
        await uploadBytes(storageRef, screenshot);
        const downloadURL = await getDownloadURL(storageRef);

        // Store UTR and screenshot URL in Firestore
        await addDoc(collection(db, 'payments'), {
          utr,
          screenshotUrl: downloadURL,
          plan,
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
      <div className="flex flex-grow">
        <div className="hidden lg:block lg:w-1/2">
          <img src="https://ic.pics.livejournal.com/tripplepushpop6/83301383/1608850/1608850_original.jpg" alt="Side Image" className="h-full w-full object-cover" />
        </div>
        <div className="flex-grow flex flex-col items-center justify-center p-4 lg:w-1/2">
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-xl w-full p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">{planDetails[plan]}</h2>
            <p className="text-gray-400 mb-4">Thank you for choosing our plan. Click the button below to proceed with the payment.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Pay Now
            </button>
            <h2 className="text-2xl font-semibold mt-6 mb-4">UPI Payment</h2>
            <p className="text-lg mb-4">UPI ID: <span className="font-bold">aditya@ibl</span></p>
            <div className="flex justify-center mb-4">
              <img src="https://www.shiftboard.com/wp-content/uploads/2016/08/shiftboard-qr-code.png" alt="QR Code" className="w-48 h-48" />
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4 bg-gray-700 rounded-lg">
              <img src="https://www.theindianwire.com/wp-content/uploads/2019/03/ptm1.jpg" alt="Paytm" className="h-16" />
              <img src="https://entrepreneurnewsnetwork.com/wp-content/uploads/2022/10/1616131994_Jp6GOb_phonepe.webp" alt="PhonePe" className="h-16" />
              <img src="https://9to5google.com/wp-content/uploads/sites/4/2020/11/GP3Long.png" alt="Google Pay" className="h-16" />
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
