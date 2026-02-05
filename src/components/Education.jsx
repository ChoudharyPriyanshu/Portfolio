import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-[var(--color-secondary)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                            <span className="w-2 h-8 bg-[var(--color-accent)] mr-4 rounded-sm"></span>
                            Education
                        </h2>

                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[var(--color-surface)] p-8 rounded-2xl border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
                                    <p className="text-[var(--color-accent)]">KIET Group Of Institutions, Ghaziabad</p>
                                </div>
                                <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                                    2023 – 2027
                                </span>
                            </div>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-gray-100">8.59</span>
                                <span className="text-gray-400 text-sm ml-2">CGPA</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                <strong className="text-white">Coursework:</strong> Database Management Systems, Operating Systems, Data Structures, Object-Oriented Programming in Java
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Certifications & Achievements Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                            <span className="w-2 h-8 bg-[var(--color-accent)] mr-4 rounded-sm"></span>
                            Achievements
                        </h2>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[var(--color-surface)] p-6 rounded-xl border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <h3 className="text-lg font-bold text-white mb-2">Finalist — SprintHacks 3.0</h3>
                                <p className="text-gray-300 text-sm">
                                    Top 30 out of 200+ teams, 24-hour national hackathon
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[var(--color-surface)] p-6 rounded-xl border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <h3 className="text-lg font-bold text-white mb-2">Rank 2 Winner — INNOTECH Tech Fest</h3>
                                <p className="text-gray-300 text-sm">
                                    Worked on application logic, feature implementation, and project coordination
                                </p>
                            </motion.div>

                             <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[var(--color-surface)] p-6 rounded-xl border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <h3 className="text-lg font-bold text-white mb-2">AWS Certified Cloud Practitioner</h3>
                                <p className="text-gray-300 text-sm">
                                   Certified in AWS cloud fundamentals
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
