import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--color-secondary)]">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="text-center md:text-left flex-1">
                        <p className="text-[var(--color-accent)] font-bold tracking-wider mb-4 animate-fade-in-up bg-[var(--color-accent)]/10 inline-block px-3 py-1 rounded-full text-sm">
                            👋 HELLO, I'M
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100 leading-tight">
                            Priyanshu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]">
                                Choudhary
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light animate-fade-in-up delay-200">
                            Full-stack MERN Developer
                        </h2>

                        <p className="max-w-xl mx-auto md:mx-0 text-gray-400 text-lg leading-relaxed mb-10 animate-fade-in-up delay-300">
                            Building secure, scalable web applications with modern technologies.
                            Specialized in React, Node.js, and real-time systems.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 animate-fade-in-up delay-400">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:bg-[var(--color-accent-light)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[var(--color-accent)]/30"
                            >
                                Contact Me
                            </a>
                            <a
                                href="/PriyanshuChoudharyResumeLatest.pdf"
                                download
                                className="px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[var(--color-accent)]/5 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* <div className="mt-12 flex justify-center md:justify-start space-x-8 text-gray-600 animate-fade-in-up delay-500">
                            <a href="#" className="hover:text-[var(--color-accent)] transition-colors transform hover:scale-110">LinkedIn</a>
                            <a href="#" className="hover:text-[var(--color-accent)] transition-colors transform hover:scale-110">GitHub</a>
                            <a href="mailto:cpriyanshu211@gmail.com" className="hover:text-[var(--color-accent)] transition-colors transform hover:scale-110">Email</a>
                        </div> */}
                    </div>

                    {/* Avatar Image */}
                    <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up delay-200">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-[var(--color-accent)] rounded-full opacity-10 animate-pulse"></div>
                            <img
                                src="/avatar.png"
                                alt="Priyanshu Choudhary"
                                className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
                            />
                            {/* Floating decorative elements */}
                            {/* <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-700">
                                <span className="text-2xl">💻</span>
                            </div>
                            <div className="absolute bottom-8 -left-8 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-1000">
                                <span className="text-2xl">🚀</span>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
