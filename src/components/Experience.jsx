import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Web Development Intern",
            company: "Oasis Infobyte (AICTE Approved)",
            duration: "Jun 2025 – Jul 2025",
            description: [
                "Built full-stack pizza delivery app with real-time tracking",
                "Razorpay integration, 95% transaction success rate",
                "Inventory + low-stock alerts improved efficiency by 50%"
            ]
        },
        {
            role: "Microsoft Learn Student Ambassador",
            company: "MLSA (KIET)",
            duration: "Oct 2024",
            description: [
                "Created responsive web app with REST backend",
                "Improved performance by 25%",
                "Reduced review cycles by 30% using Git Workflows"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-[var(--color-secondary)] relative">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Professional <span className="text-[var(--color-accent)]">Experience</span>
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gray-700"
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative mb-12 md:mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:flex items-center justify-between group`}>

                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-accent)] rounded-full border-4 border-[var(--color-surface)] shadow-md z-10 mt-1.5 md:mt-0"
                            ></motion.div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'} p-6 bg-[var(--color-surface)] rounded-xl border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10`}
                            >
                                <h3 className="text-xl font-bold text-gray-100 group-hover:text-[var(--color-accent)] transition-colors">{exp.role}</h3>
                                <h4 className="text-[var(--color-accent-light)] font-medium mb-1">{exp.company}</h4>
                                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                                <ul className="space-y-2">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                                            <span className="text-[var(--color-accent)] mr-2 mt-1.5 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0 inline-block md:hidden"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
