import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const form = e.target;

        const formData = {
           access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            subject: "New Portfolio Contact",

            
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                form.reset();
            } else {
                setStatus({
                    type: 'error',
                    message: 'Failed to send message. Please try again or email me directly.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
            href: 'https://www.linkedin.com/in/priyanshu-choudhary-7936a4296/'
        },
        {
            name: 'GitHub',
            icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            href: 'https://github.com/ChoudharyPriyanshu'
        },
          {
            name: 'LeetCode',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
            href: 'https://leetcode.com/u/choudhary_priyanshu/'
        },
          {
            name: 'CodeChef',
            icon: 'https://cdn.codechef.com/images/cc-logo.svg',
            href: 'https://www.codechef.com/users/priyanshu_172'
        },
          {
            name: 'HackerRank',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
            href: 'https://www.hackerrank.com/profile/cpriyanshu211'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-[var(--color-secondary)] border-t border-gray-800 relative overflow-hidden">
            {/* Decorative Circles */}
            {/* <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-16"
                    >
                        Get In <span className="text-[var(--color-accent)]">Touch</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8 flex flex-col justify-center"
                        >
                            <h3 className="text-3xl font-bold text-white">Let's talk about everything!</h3>
                            <p className="text-gray-300 text-lg">
                               Prefer email? You can reach me directly. 👋
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="mailto:cpriyanshu211@gmail.com"
                                    className="flex items-center justify-center md:justify-start space-x-4 text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 group"
                                >
                                    <span className="p-3 bg-gray-800 rounded-full group-hover:bg-[var(--color-accent)]/20 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <span className="text-lg">cpriyanshu211@gmail.com</span>
                                </a>
                                <a
                                    href="tel:+919027497153"
                                    className="flex items-center justify-center md:justify-start space-x-4 text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 group"
                                >
                                    <span className="p-3 bg-gray-800 rounded-full group-hover:bg-[var(--color-accent)]/20 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    <span className="text-lg">+91 9027497153</span>
                                </a>
                            </div>

                            <div className="flex justify-center md:justify-start space-x-6 pt-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 p-2 bg-gray-800/50 rounded-lg hover:bg-[var(--color-accent)]/20 border border-transparent hover:border-[var(--color-accent)]/50"
                                    >
                                        <img
                                            src={link.icon}
                                            alt={link.name}
                                            className="w-8 h-8 opacity-90 hover:opacity-100"
                                        />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <form
                                onSubmit={sendEmail}
                                className="bg-[var(--color-surface)] p-8 rounded-2xl border border-gray-700 shadow-xl space-y-6 text-left hover:border-[var(--color-accent)] transition-all duration-300 group hover:shadow-[var(--color-accent)]/10"
                            >
                                {status.message && (
                                    <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success'
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}>
                                        {status.message}
                                    </div>
                                )}

                                <input type="checkbox" name="botcheck" className="hidden" />

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300 resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-[var(--color-accent)] text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/20 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[var(--color-accent-light)]'
                                        }`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    <div className="text-center mt-20 text-gray-500 text-sm">
                        © {new Date().getFullYear()} Priyanshu Choudhary. All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
