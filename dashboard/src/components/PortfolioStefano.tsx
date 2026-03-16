import { motion } from 'framer-motion'
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PortfolioStefano() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            {/* Back to Dashboard */}
            <nav className="p-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Regresar al Dashboard</span>
                </Link>
            </nav>

            <main className="max-w-4xl mx-auto px-8 py-20 flex flex-col gap-24">
                {/* HERO */}
                <header className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.3em]">Hola, soy Stefano</span>
                        <h1 className="text-7xl font-black tracking-tighter leading-none">
                            DISEÑO <br />
                            <span className="text-gray-600">INTENCIONES.</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 font-light leading-relaxed max-w-xl"
                    >
                        Explorando el límite entre el diseño humano y la ejecución por IA.
                        Este es mi espacio de experimentación en el Metacurso Antigravity.
                    </motion.p>
                </header>

                {/* PROJECTS SECTION (Skeleton) */}
                <section className="flex flex-col gap-12">
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-700">Proyectos Seleccionados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-end gap-4 group hover:bg-white/[0.04] transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-indigo-400 transition-colors">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Proyecto 0{i}</h3>
                                    <p className="text-sm text-gray-500">Descripción breve del proyecto e impacto.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-600 text-sm">© 2026 Stefano — Generado con Antigravity</p>
                    <div className="flex gap-6">
                        <Linkedin className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                        <Github className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                        <Mail className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                    </div>
                </footer>
            </main>
        </div>
    )
}
