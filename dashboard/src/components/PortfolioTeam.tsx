import { ArrowLeft, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PortfolioTeam() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center p-8">
            <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Dashboard</span>
            </Link>

            <div className="text-center flex flex-col gap-6 max-w-2xl">
                <div className="w-20 h-20 bg-indigo-600/20 border border-indigo-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-10 h-10 text-indigo-400" />
                </div>
                <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">Notion MCP Project</h1>
                <p className="text-gray-400 text-xl font-light leading-relaxed">
                    Este espacio está reservado para la integración con la base de datos <code className="text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">@Seguimiento ingresados</code>.
                </p>
                <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 mt-8">
                    <p className="text-sm text-gray-500 italic">
                        "Antigravity, conecta con Notion, lee los datos del cliente y genera su portafolio aquí."
                    </p>
                </div>
            </div>
        </div>
    )
}
