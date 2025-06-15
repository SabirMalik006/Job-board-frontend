// src/api/applications.js
import axios from './axios';

export const applyToJob = async (jobId) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post('/applications/apply', {
      jobId,
    }, {
      headers: {
        Authorization: `Bearer ${token}`, // Token send to backend
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Something went wrong';
  }
};
