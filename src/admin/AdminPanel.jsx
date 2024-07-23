import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
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

    fetchProfiles();

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

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white text-center mb-4">Admin Panel</h1>
        <div className="mb-4">
          <form onSubmit={handleAddProfile} className="bg-gray-800 p-4 rounded-lg shadow-lg">
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
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
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
    </div>
  );
};

export default AdminPanel;
