import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// TypingText component for typewriter effect
const TypingText = ({ text, speed = 50, delay = 0, style, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const ref = useRef();
  const firstTime = useRef(true);

  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firstTime.current) {
          firstTime.current = true;
          setIndex(0);
          setDisplayedText('');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span ref={ref} style={style} className={className}>
      {displayedText}
    </span>
  );
};

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
      const response = await fetch('https://cipcopharma.com/api/contacts', {
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
    <div style={isMobile?styles.container2:styles.container}>
      <div style={styles.firstcontainer}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.description}>
        <TypingText
          text="We'd love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to assist you."
          speed={0}
          delay={0}
          style={{ fontSize: '1em', color: '#555' }}
        />
      </p>
      </div>
      <div className={isMobile?"":'flex gap-[20px] px-[100px]'}>
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
      <form onSubmit={handleSubmit} style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}} className={isMobile?"space-y-4 bg-[#F3F4F6] w-[90%] justify-center mx-auto p-[10px] pt-[20px] mb-[20px] rounded-[10px]":"space-y-4 bg-[#F3F4F6] p-[30px] rounded-[10px] w-1/2 mx-auto"}>
      <div className='text-[20px] mb-[20px] '>Send us a Message</div>
        <div>
          <label className="block text-sm font-medium mb-[8px]">
            Name<span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}}
            placeholder="John Smith"
            className={`${isMobile?"w-[90%]":"w-[96%]"} mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[8px] focus:outline-none shadow-md`}
            required
          />
        </div>
        <div className={isMobile?'':'flex w-[full] gap-[10px]'}>
        <div>
          <label className="block text-sm font-medium mb-[8px]">
            Email<span className="text-[red]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}}
            onChange={handleChange}
            placeholder="johnsmith@gmail.com"
            className={`${isMobile?"w-[90%]":"w-[285px]"} mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[8px] focus:outline-none shadow-md`}
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
            style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}}
            placeholder="+44789 123456"
            className={`${isMobile?"w-[90%]":"w-[285px]"} mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[8px] focus:outline-none shadow-md`}
          />
        </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-[8px]">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}}
            placeholder="Inquiry about products"
            className={`${isMobile?"w-[90%]":"w-[96%]"} mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[8px] focus:outline-none shadow-md`}
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
            style={{boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}}
            placeholder="Hello, I'd like to enquire about..."
            className={`${isMobile?"w-[90%]":"w-[96%]"} mb-[14px] px-[14px] py-[10px] border border-[#D1D5DB] rounded-[8px] focus:outline-none shadow-md`}
            required
          ></textarea>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-[#BCF0DA] border border-[#0E9F6E] text-[#046C4E] px-[4px] py-[3px] rounded-[10px] mb-[4px]">
            Thank you for your message! We will get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-[#FBD5D5] border border-[#F05252] text-[#C81E1E] px-4 py-3 rounded mb-4">
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
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    animation: 'fadeIn 1s',
    marginTop: '100px',
    background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #dbeafe)',
    minHeight: '100vh',
  },
  container2: {
    padding: '0px',
    animation: 'fadeIn 1s',
    marginTop: '100px',
    background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #dbeafe)',
    minHeight: '100vh',
  },
  firstcontainer: {
    textAlign: 'center',
    marginBottom: '40px',
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
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '20px 0',
  },
  infoItem: {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '10px',
    borderRadius: '15px',
    flex: '1',
    minWidth: '250px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
  },
  infoTitle: {
    fontSize: '1.2em',
    color: '#305d94',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: '1em',
    color: '#555',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#cce4e8',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    border: '1px solid #b8c9d4',
  },
  formMobile: {
    width: '90%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#cce4e8',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    border: '1px solid #b8c9d4',
    marginBottom: '20px',
  },
  formTitle: {
    fontSize: '1.5em',
    color: '#305d94',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flexRow: {
    display: 'flex',
    gap: '20px',
  },
  flexItem: {
    flex: 1,
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '1em',
    marginBottom: '14px',
    transition: 'border-color 0.3s',
  },
  inputMobile: {
    width: '90%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '1em',
    marginBottom: '14px',
    transition: 'border-color 0.3s',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '1em',
    minHeight: '100px',
    marginBottom: '14px',
    transition: 'border-color 0.3s',
  },
  textareaMobile: {
    width: '90%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '1em',
    minHeight: '100px',
    marginBottom: '14px',
    transition: 'border-color 0.3s',
  },
  successMessage: {
    backgroundColor: '#BCF0DA',
    border: '1px solid #0E9F6E',
    color: '#046C4E',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  errorMessage: {
    backgroundColor: '#FBD5D5',
    border: '1px solid #F05252',
    color: '#C81E1E',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#305d94',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

export default ContactUs;
