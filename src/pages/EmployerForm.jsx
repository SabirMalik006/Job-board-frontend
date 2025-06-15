// import React, { useState } from 'react';
// import axios from 'axios';

// const EmployerForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     logo: '',
//     description: '',
//     location: '',
//     website: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token'); // Token jo login ke baad save hua tha
//       const res = await axios.post(
//         'http://localhost:5000/companies',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       setMessage(res.data.message);
//     } catch (error) {
//       console.error(error);
//       setMessage(error.response?.data?.message || 'Error occurred.');
//     }
//   };

//   return (
//     <div>
//       <h2>Create Company</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Company Name" onChange={handleChange} required />
//         <input type="text" name="logo" placeholder="Logo URL" onChange={handleChange} />
//         <textarea name="description" placeholder="Description" onChange={handleChange} />
//         <input type="text" name="location" placeholder="Location" onChange={handleChange} />
//         <input type="text" name="website" placeholder="Website" onChange={handleChange} />
//         <button type="submit">Create Company</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default EmployerForm;
