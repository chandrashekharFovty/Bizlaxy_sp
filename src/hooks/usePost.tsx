import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useHandleSubmit = () => {
  const [showError, setShowError] = useState('');
  const [showSuccess, setShowSuccess] = useState('');
  const navigate = useNavigate();

  const hookHandleSubmit = async (formData, url, pagelocation = '') => {
    try {
      const response = await axios.post(url, formData);
      const { status, message } = response.data;

      if (status === 'success') {
        setShowSuccess(response.data.message || 'Submitted successfully!');
        console.log("Succes data:", response.data.message);
        
        //console.log("OTP:", response.data.otp);
        console.log("Response Data",response.data);
        
        
        setTimeout(() => {
          navigate(pagelocation);
        }, 2000);
      } else {
        setShowError(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      setShowError(error.response.data.message || error || 'An error occurred.');
        // console.log(error|| 'An error occurred.');
        console.log("Error:", error);
        
    }

    setTimeout(() => {
      setShowError('');
      setShowSuccess('');
    }, 2000);
  };

  return { hookHandleSubmit, showError, showSuccess };
};

export default useHandleSubmit;
