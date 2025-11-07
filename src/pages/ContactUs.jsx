import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(()=>{
      const handleResize = () =>{
        const mobile=window.innerWidth < 768;
        setIsMobile(mobile);
        if(!mobile){
          setIsMobile(false);
        }
      };
      window.addEventListener('resize',handleResize);
      return()=>window.removeEventListener('resize',handleResize);
    },[]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:4000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.firstcontainer}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.description}>
        We'd love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to assist you.
      </p>
      <div style={styles.contactInfo}>
        <div style={styles.infoItem}>
          <h3 style={styles.infoTitle}>Address</h3>
          <p style={styles.infoText}>35-36/1 A.B. Road, Pigdamber, Indore – 453331 (MP) INDIA”</p>
        </div>
        <div style={styles.infoItem}>
          <h3 style={styles.infoTitle}>Phone</h3>
          <p style={styles.infoText}>0731 4020311, 0786 9920311</p>
        </div>
        <div style={styles.infoItem}>
          <h3 style={styles.infoTitle}>Email</h3>
          <p style={styles.infoText}>info@cipcopharma.com</p>
        </div>
      </div>
      </div>
      <form onSubmit={handleSubmit} className={isMobile?"space-y-4 w-[60%] justify-center mx-auto":"space-y-4 w-1/2 mx-auto"}>
        <div>
          <label className="block text-sm font-medium mb-[8px]">
            Name<span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[4px] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-[8px]">
            Email<span className="text-[red]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johnsmith@gmail.com"
            className="w-full mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[4px] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-[8px]">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44789 123456"
            className="w-full mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[4px] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-[8px]">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Inquiry about products"
            className="w-full mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[4px] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-[8px]">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hello, I'd like to enquire about..."
            className="w-full mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[4px] focus:outline-none resize-none"
            required
          ></textarea>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you for your message! We will get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            There was an error submitting your message. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#111827] text-[white] font-semibold cursor-pointer py-[8px] px-4 rounded-[4px] hover:bg-[#333] transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    // textAlign: 'center',
    animation: 'fadeIn 1s',
    marginTop: '100px',
  },
  firstcontainer:{
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
    color: '#305d94',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '20px',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '20px 0',
  },
  infoItem: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    margin: '10px',
    borderRadius: '5px',
    flex: '1',
    minWidth: '200px',
    animation: 'slideIn 0.5s',
  },
  infoTitle: {
    fontSize: '1.2em',
    color: '#305d94',
    margin: '0 0 10px 0',
  },
  infoText: {
    fontSize: '1em',
    color: '#555',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    animation: 'slideIn 0.5s',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#305d94',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#305d94',
  },
};

export default ContactUs;
