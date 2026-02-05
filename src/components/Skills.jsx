import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Java (DSA)", "JavaScript", "TypeScript", "C", "Python"]
        },
        {
            title: "Frameworks & Tech",
            skills: ["Node.js", "Express.js", "React.js", "Tailwind CSS", "Mongoose", "JWT"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "MongoDB", "REST APIs", "Postman", "VS Code", "Render", "Cloudinary"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" className="py-20 bg-[var(--color-secondary)] relative overflow-hidden text-white">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Technical <span className="text-[var(--color-accent)]">Skills</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group bg-[var(--color-surface)] p-8 rounded-2xl border border-gray-700 hover:border-[var(--color-accent)] transition-colors duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10"
                        >
                            <h3 className="text-xl font-bold text-gray-100 mb-6 border-b border-gray-600 pb-2 text-center group-hover:text-[var(--color-accent)] transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 cursor-default shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
