import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PortfolioStefano() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center p-8">
            <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Dashboard</span>
            </Link>

            <div className="text-center flex flex-col gap-4">
                <h1 className="text-4xl font-black tracking-tighter uppercase">Portafolio de Stefano</h1>
                <p className="text-gray-500 italic">Página en blanco. Listo para recibir instrucciones del agente.</p>
            </div>
        </div>
    )
}
