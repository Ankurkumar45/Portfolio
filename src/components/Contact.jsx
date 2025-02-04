import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import SocialMedia from './SocialMedia';

const Contact = ({ lightMode, setLightMode }) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ show: false, type: '', message: '' })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus({
                show: true,
                type: 'success',
                message: 'Message sent successfully!'
            });

            setFormData({ name: '', email: '', message: '' });
            form.current.reset();
        } catch (error) {
            console.error('Error:', error)
            setStatus({
                show: true,
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setLoading(false);
            setTimeout(() => {
                setStatus({ show: false, type: '', message: '' });
            }, 5000);
        }
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br ${lightMode ? 'bg-white' : 'from-gray-900 to-black'} transform transition-all duration-300`} >
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${lightMode ? 'text-gray-500' : 'text-white'} transform transition-all duration-300`}>
                    Get In <span className={`${lightMode ? 'text-gray-700' : 'text-indigo-500'} transform transition-all duration-300 `}>Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className={`${lightMode ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-sm rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300`}>
                            <h3 className={`text-2xl font-bold ${lightMode ? 'text-gray-700' : 'text-white'} mb-4`}>Contact Information</h3>
                            <div className="space-y-4">
                                <div className={`flex items-center space-x-4 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>ankurdw806@gmail.com</span>
                                </div>

                                <div className={`flex items-center space-x-4 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 7070967806, +91 9234615948</span>
                                </div>

                                <div className={`flex items-center space-x-4 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Gopalganj, Bihar, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className={`${lightMode ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-sm rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300`}>
                            <h3 className={`text-2xl font-bold ${lightMode ? 'text-gray-700' : 'text-white'}     mb-4`}>Follow Me</h3>
                            <div className="flex space-x-4">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`${lightMode ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-sm rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300`}>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            {status.show && (
                                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                                    }`}>
                                    {status.message}
                                </div>
                            )}
                            <div className="relative">
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    className={`w-full ${lightMode ? 'bg-white text-gray-700' : 'bg-white/5 text-white'} border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-${lightMode ? '' : 'indigo'}-500 transition-colors peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-${lightMode ? 'gray' : 'indigo'}-500 left-1`}
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    className={`w-full ${lightMode ? 'bg-white text-gray-700' : 'bg-white/5 text-white'} border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-${lightMode ? '' : 'indigo'}-500 transition-colors peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-${lightMode ? 'gray' : 'indigo'}-500 left-1`}
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className={`w-full ${lightMode ? 'bg-white text-gray-700' : 'bg-white/5 text-white'} border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-${lightMode ? '' : 'indigo'}-500 transition-colors peer`}
                                    placeholder=" "
                                    required
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className={`absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-${lightMode ? 'gray' : 'indigo'}-500 left-1`}
                                >
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`cursor-pointer w-full ${loading
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-indigo-500 hover:bg-indigo-600'
                                    } text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                ) : null}
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;