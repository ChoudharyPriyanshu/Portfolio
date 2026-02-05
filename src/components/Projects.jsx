import { motion } from 'framer-motion';
import trevoImg from '../assets/trevo_project.png';
import medbrainImg from '../assets/medbrain_project.png';

const Projects = () => {
    const projects = [
        {
            title: "Trevo — Real-Time Communication Platform",
            date: "Sep 2025 – Oct 2025",
            description: "Full-stack messaging and video calling application with typing indicators, reactions, live status, and screen sharing capabilities.",
            tech: ["React", "Express", "MongoDB", "Tailwind", "Zustand", "JWT", "Stream API"],
            image: trevoImg,
            links: {
                github: "https://github.com/ChoudharyPriyanshu/Trevo-video-calls-chat",
                live: "https://trevo-video-calls-chat.onrender.com/login"
            }
        },
        {
            title: "MedBrain — Medical Records Platform",
            date: "Dec 2024 – Jan 2025",
            description: "Backend development for 500+ users featuring JWT authentication, secure access control, and Cloudinary storage for medical documents.",
            tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
            image: medbrainImg,
            links: {
                github: "https://github.com/ChoudharyPriyanshu/Hackdata",
                live: "https://medbrain.netlify.app/"
            }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[var(--color-secondary)] border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Featured <span className="text-[var(--color-accent)]">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-accent)]/10 flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-[var(--color-accent)] transition-colors">
                                        {project.title.split('—')[0]}
                                    </h3>
                                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700 whitespace-nowrap ml-2">
                                        {project.date.split('–')[0].trim()}
                                    </span>
                                </div>

                                <p className="text-gray-300 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-gray-700 mt-auto">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm"
                                    >
                                        <span className="mr-2">GitHub</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm"
                                    >
                                        <span className="mr-2">Live Demo</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
