import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, storage, auth } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import loadingGif from '../assets/loading.gif'; // Import your loading gif
import './styles.css'; // Import the CSS file

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gender, setGender] = useState('');
  const [interestJobs, setInterestJobs] = useState(false);
  const [interestStartups, setInterestStartups] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setResume(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User not authenticated');
      }

      if (!privacyPolicy) {
        throw new Error('You must agree to the privacy policy.');
      }

      // Upload resume to Firebase Storage
      const resumeRef = ref(storage, `resumes/${resume.name}`);
      await uploadBytes(resumeRef, resume);
      const resumeURL = await getDownloadURL(resumeRef);

      // Save user details to Firestore
      await addDoc(collection(db, 'profiles'), {
        name,
        email,
        whatsapp,
        gender,
        interestJobs,
        interestStartups,
        resumeURL,
        userId: user.uid,
      });

      setMessage('Profile updated successfully!');
      navigate('/plans'); // Redirect to Plans page
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col relative">
      {loading && (
        <div className="loading-overlay">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
        </div>
      )}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-lg flex max-w-4xl w-full">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="name">
                  Name
                </label>
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
                <label className="block text-gray-400 mb-1" htmlFor="email">
                  Email
                </label>
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
                <label className="block text-gray-400 mb-1" htmlFor="whatsapp">
                  WhatsApp Contact
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1">
                  Interests
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="interestJobs"
                    className="mr-2"
                    checked={interestJobs}
                    onChange={(e) => setInterestJobs(e.target.checked)}
                  />
                  <label htmlFor="interestJobs" className="text-gray-400">Interested in Jobs</label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="interestStartups"
                    className="mr-2"
                    checked={interestStartups}
                    onChange={(e) => setInterestStartups(e.target.checked)}
                  />
                  <label htmlFor="interestStartups" className="text-gray-400">Interested in Startups</label>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-400">
                  Your other confidential information will be taken on WhatsApp window.
                </p>
              </div>
              <div
                className="mb-4 p-4 border-2 border-dashed border-gray-700 rounded-lg"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <label className="block text-gray-400 mb-1" htmlFor="resume">
                  Resume (Drag and drop or click to upload)
                </label>
                <input
                  type="file"
                  id="resume"
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:outline-none"
                  onChange={handleFileChange}
                  required
                />
                {resume && <p className="text-gray-400 mt-2">{resume.name}</p>}
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2"
                  checked={privacyPolicy}
                  onChange={(e) => setPrivacyPolicy(e.target.checked)}
                  required
                />
                <label htmlFor="privacyPolicy" className="text-gray-400">
                  I agree to the <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={loading} // Disable the button when loading
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {message && <p className="mt-4 text-center text-white">{message}</p>}
          </div>
          <div
            className="hidden md:block md:w-1/2 bg-cover bg-center rounded-r-lg"
            style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/023/869/737/original/iridescence-abstract-shape-3d-illustration-png.png)` }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
