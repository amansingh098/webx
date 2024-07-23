import { getFunctions, httpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { auth } from '../firebase';

const AddAdmin = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const addAdminRole = async () => {
    const functions = getFunctions();
    const addAdminRole = httpsCallable(functions, 'addAdminRole');

    try {
      const result = await addAdminRole({ email });
      setMessage(result.data.message || result.data.error);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Add Admin</h1>
      <input
        type="email"
        placeholder="User email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addAdminRole}>Make Admin</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddAdmin;
