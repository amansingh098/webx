import React, { useState, useEffect } from 'react';
import { db, auth, storage } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [payments, setPayments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [utr, setUtr] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/admin-login');
      }
    });

    const fetchProfiles = async () => {
      const profilesCollection = await getDocs(collection(db, 'profiles'));
      setProfiles(profilesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const fetchPayments = async () => {
      const paymentsCollection = await getDocs(collection(db, 'payments'));
      setPayments(paymentsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProfiles();
    fetchPayments();

    return () => unsubscribe();
  }, [navigate]);

  const handleAddProfile = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'profiles'), { name, email, whatsapp });
      setName('');
      setEmail('');
      setWhatsapp('');
      const profilesCollection = await getDocs(collection(db, 'profiles'));
      setProfiles(profilesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error('Error adding profile: ', error);
    }
  };

  const handleDeleteProfile = async (id) => {
    try {
      await deleteDoc(doc(db, 'profiles', id));
      setProfiles(profiles.filter(profile => profile.id !== id));
    } catch (error) {
      console.error('Error deleting profile: ', error);
    }
  };

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmitPayment = async () => {
    if (utr && screenshot) {
      try {
        const user = auth.currentUser;
        const storageRef = ref(storage, `screenshots/${screenshot.name}`);
        await uploadBytes(storageRef, screenshot);
        const downloadURL = await getDownloadURL(storageRef);

        await addDoc(collection(db, 'payments'), {
          utr,
          screenshotUrl: downloadURL,
          userId: user.uid,
          email: user.email,  // Assuming you want to keep track of the user's email as well
        });

        setNotification('Payment submitted successfully.');
      } catch (error) {
        console.error('Error submitting payment:', error);
        setNotification('Error submitting payment. Please try again.');
      }
    } else {
      setNotification('Please provide UTR number and screenshot.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white text-center mb-8">Admin Panel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white mb-4">Add Profile</h2>
            <form onSubmit={handleAddProfile}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="whatsapp">WhatsApp</label>
                <input
                  type="tel"
                  id="whatsapp"
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add Profile
              </button>
            </form>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white mb-4">Profiles</h2>
            <table className="w-full text-gray-400">
              <thead>
                <tr>
                  <th className="border-b border-gray-700 px-4 py-2">Name</th>
                  <th className="border-b border-gray-700 px-4 py-2">Email</th>
                  <th className="border-b border-gray-700 px-4 py-2">WhatsApp</th>
                  <th className="border-b border-gray-700 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map(profile => (
                  <tr key={profile.id}>
                    <td className="border-b border-gray-700 px-4 py-2">{profile.name}</td>
                    <td className="border-b border-gray-700 px-4 py-2">{profile.email}</td>
                    <td className="border-b border-gray-700 px-4 py-2">{profile.whatsapp}</td>
                    <td className="border-b border-gray-700 px-4 py-2">
                      <button
                        onClick={() => handleDeleteProfile(profile.id)}
                        className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl text-white mb-4">Payment Information</h2>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1" htmlFor="utr">UTR Number</label>
            <input
              type="text"
              id="utr"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1" htmlFor="screenshot">Payment Screenshot</label>
            <input
              type="file"
              id="screenshot"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
              onChange={handleFileChange}
              required
            />
          </div>
          <button
            onClick={handleSubmitPayment}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Payment
          </button>
          {notification && (
            <p className="mt-4 text-green-500">{notification}</p>
          )}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl text-white mb-4">Payments Received</h2>
          <table className="w-full text-gray-400">
            <thead>
              <tr>
                <th className="border-b border-gray-700 px-4 py-2">Email</th>
                <th className="border-b border-gray-700 px-4 py-2">UTR Number</th>
                <th className="border-b border-gray-700 px-4 py-2">Screenshot</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="border-b border-gray-700 px-4 py-2">{payment.email}</td>
                  <td className="border-b border-gray-700 px-4 py-2">{payment.utr}</td>
                  <td className="border-b border-gray-700 px-4 py-2">
                    <a href={payment.screenshotUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Screenshot</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
