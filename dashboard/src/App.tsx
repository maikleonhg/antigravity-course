import { useState } from 'react'
import type { Session } from './data'
import { SESSIONS } from './data'
import { Rocket, BookOpen, Terminal, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [activeSession, setActiveSession] = useState<Session>(SESSIONS[0])

  return (
    <div className="min-h-screen flex text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 border-r border-white/10 p-6 flex flex-col gap-8 bg-[#0d0d10]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            <Rocket className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">ANTIGRAVITY <span className="text-indigo-500">CURSE</span></h1>
        </div>

        <nav className="flex flex-col gap-2">
          {SESSIONS.map((session) => (
            <button
              key={session.id}
              onClick={() => setActiveSession(session)}
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${activeSession.id === session.id
                  ? 'bg-indigo-600/20 border border-indigo-500/30 text-white shadow-[inset_0_0_10px_rgba(79,70,229,0.1)]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <div className={`p-2 rounded-lg ${activeSession.id === session.id ? 'text-indigo-400' : 'text-gray-500'}`}>
                {session.completed ? <CheckCircle2 className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
              </div>
              <div className="text-left leading-tight">
                <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Sesión 0{session.id}</p>
                <p className="font-semibold text-sm">{session.title}</p>
              </div>
            </button>
          ))}
        </nav>

        <div className="mt-auto glass-card p-4 rounded-2xl">
          <p className="text-xs text-indigo-400 font-bold mb-1">PROGRESO TOTAL</p>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 w-1/3 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto bg-gradient-to-br from-[#0a0a0c] to-[#121216]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSession.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Header */}
            <header className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest leading-none">
                <Sparkles className="w-3 h-3" /> Laboratorio Activo
              </div>
              <h2 className="text-5xl font-extrabold tracking-tighter leading-none gradient-text">
                {activeSession.title}
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                {activeSession.description}
              </p>
            </header>

            {/* Steps / Instructions */}
            <section className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-500" /> Instrucciones del Agente
              </h3>

              <div className="glass-card space-y-6 group">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-400">PASO 1</p>
                  <p className="text-lg">Abre tu chat con Antigravity en esta ventana.</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-400">PASO 2</p>
                  <p className="text-lg">Copia y envía este comando maestro para iniciar la sesión:</p>

                  <div className="relative group/copy mt-4 bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-indigo-300">
                    <code>{activeSession.prompt}</code>
                    <button className="absolute top-4 right-4 p-2 bg-white/5 rounded-lg opacity-0 group-hover/copy:opacity-100 transition-opacity">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    <p className="text-sm text-gray-400">
                      Carpeta de trabajo: <span className="text-indigo-300 font-mono">{activeSession.folder}</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Preview Section Placeholder */}
            {activeSession.id === "2" && (
              <section className="space-y-4 pt-8">
                <h3 className="text-xl font-bold">Preview de tu Proyecto</h3>
                <div className="aspect-video w-full rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-50"></div>
                  <p className="text-gray-500 font-medium">Esperando que el Agent genere el código...</p>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
