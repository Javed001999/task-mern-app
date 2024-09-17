import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_743ixbh', 'template_85nxqyc', form.current, {
        publicKey: 'eE43GeEn5F1eg2GAT',
      })
      .then(
        () => {
          toast.success('Form is Submitted Successfully');
          form.current.reset(); 
        },
        (error) => {
          toast.error('Failed to send the form: ' + error.text);
        },
      );
  };

  return (
    <>
      <style>
        {`
          h1 {
            text-align: center;
            margin-bottom: 20px;
          }

          form {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 10px 10px 8px gray;
          }

          label {
            margin-bottom: 5px;
            font-weight: bold;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          }

          textarea {
            resize: vertical;
            min-height: 100px;
          }

          input[type="submit"] {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }

          input[type="submit"]:hover {
            background-color: #0056b3;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            form {
              padding: 15px;
            }

            input[type="text"],
            input[type="email"],
            textarea {
              font-size: 14px;
            }

            input[type="submit"] {
              padding: 8px 16px;
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            form {
              padding: 10px;
            }

            input[type="text"],
            input[type="email"],
            textarea {
              font-size: 12px;
              padding: 8px;
            }

            input[type="submit"] {
              padding: 6px 12px;
              font-size: 12px;
            }
          }
        `}
      </style>
      <h1 style={{ fontSize:"bold", marginTop:'20px'}}>Get in Touch</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      <ToastContainer />
    </>
  );
}

export default Contact;

