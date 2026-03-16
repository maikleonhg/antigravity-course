import { useState } from 'react'
import type { Session } from './data'
import { SESSIONS } from './data'
import { Rocket, BookOpen, Terminal, CheckCircle2, Sparkles, Layout, Zap, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [activeSession, setActiveSession] = useState<Session>(SESSIONS[0])
  const [view, setView] = useState<'content' | 'about'>('content')

  return (
    <div className="flex w-full h-screen text-white bg-bg-primary overflow-hidden font-sans">
      {/* SIDEBAR - Non-fixed for better flow */}
      <aside className="w-80 h-full bg-bg-sidebar border-r border-white/10 p-8 flex flex-col gap-10 z-30 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-600 rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter leading-none text-white">ANTIGRAVITY</h1>
            <p className="text-[10px] text-indigo-400 font-bold tracking-[0.2em] mt-1 uppercase">Meta Course</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Conoce el Agente</p>
          <button
            onClick={() => setView('about')}
            className={`flex items-center gap-3 p-4 rounded-xl transition-all ${view === 'about' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="font-bold text-sm">¿Qué es Antigravity?</span>
          </button>

          {/* Roadmap hidden per user request */}

          <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-6 mb-2">Módulos</p>
          <div className="flex flex-col gap-2">
            {SESSIONS.map((session) => (
              <button
                key={session.id}
                onClick={() => {
                  setActiveSession(session)
                  setView('content')
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${activeSession.id === session.id && view === 'content'
                  ? 'bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <div className={`shrink-0 ${activeSession.id === session.id ? 'text-white' : 'text-gray-600 group-hover:text-indigo-400'}`}>
                  {session.completed ? <CheckCircle2 className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm leading-none">{session.title}</p>
                  <p className={`text-[10px] mt-1 opacity-50 ${activeSession.id === session.id ? 'text-white' : 'text-gray-500'}`}>Sesión 0{session.id}</p>
                </div>
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-auto p-6 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-2xl -mr-12 -mt-12 group-hover:bg-indigo-500/30 transition-all" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black tracking-widest text-indigo-400 uppercase">Progreso</span>
              <span className="text-xs font-bold text-white">33%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "33%" }}
                className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-screen overflow-y-auto relative scroll-smooth bg-bg-primary">
        {/* Background Decorative Gradients - v4 syntax */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] -z-10 rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto px-12 py-24 md:py-32 flex flex-col gap-24">
          <AnimatePresence mode="wait">
            {view === 'about' ? (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-24"
              >
                {/* Intro Section */}
                <header className="flex flex-col gap-8">
                  <h2 className="text-6xl font-black tracking-tight leading-none uppercase">
                    ¿Qué es Antigravity?
                  </h2>
                  <p className="text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                    Es un entorno de co-programación donde tú dejas de escribir código línea por línea y pasas a dirigir software mediante lenguaje natural. No es solo un chat; es un agente que tiene permiso para leer tus archivos, ejecutar comandos y crear carpetas en tu propia computadora.
                  </p>
                </header>

                {/* Vibecoding Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Vibecoding: Programa a la velocidad de tu idea</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      Se llama "Vibecoding" porque el flujo de trabajo se basa en la "vibe" o la intención. En lugar de pelearte con la sintaxis de un lenguaje, hablas con el agente sobre el resultado que quieres ver.
                    </p>
                    <ul className="flex flex-col gap-4">
                      {[
                        "Tú defines la lógica y el diseño.",
                        "El agente escribe el código real por ti.",
                        "La iteración es instantánea: corriges hablando.",
                        "No necesitas memorizar librerías, solo saber qué quieres lograr."
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 flex flex-col justify-center gap-6">
                    <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                      <p className="text-xs font-mono text-indigo-400 mb-2 uppercase tracking-widest font-bold">Antes (Desarrollo Tradicional)</p>
                      <p className="text-sm text-gray-500">Idea {"->"} Buscar tutorial {"->"} Instalar dependencias {"->"} Debuggear errores {"->"} Código.</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                      <p className="text-xs font-mono text-green-400 mb-2 uppercase tracking-widest font-bold">Hoy (Vibecoding)</p>
                      <p className="text-sm text-gray-300">Idea {"->"} Prompt al Agente {"->"} Ver Resultado {"->"} Ajustar {"->"} Listo.</p>
                    </div>
                  </div>
                </section>

                {/* Practical Concept */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">De MVP a Producto Escalamiento</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Antigravity es imbatible para crear **MVPs (Productos Mínimos Viables)** y herramientas internas en tiempo récord. Lo que antes tomaba semanas de configuración, aquí toma minutos.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      La clave es que no te quedas ahí. Conforme el proyecto crece, puedes usar al agente para refinar el código, añadir tests y escalar hacia arquitecturas más robustas y complejas.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Ecosistema Extendido (MCPs)</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      El agente no solo vive en tu código. Gracias a los MCPs, puede conectarse con el resto de tus herramientas de trabajo:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                        <span className="text-xs font-black text-indigo-400">NOTION</span>
                        <p className="text-[10px] text-gray-500">Documentación automática y gestión de tareas desde el chat.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                        <span className="text-xs font-black text-indigo-400">N8N</span>
                        <p className="text-[10px] text-gray-500">Automatizaciones de flujos de trabajo y webhooks complejos.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                        <span className="text-xs font-black text-indigo-400">POSTGRES</span>
                        <p className="text-[10px] text-gray-500">Consulta y manipulación de bases de datos reales.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                        <span className="text-xs font-black text-indigo-400">SLACK</span>
                        <p className="text-[10px] text-gray-500">Reportes de estado y notificaciones automáticas.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Technical Recap */}
                <section className="p-12 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">¿Cómo funciona técnicamente?</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Antigravity funciona como un "puente" entre tu intención y tu sistema. Utiliza el protocolo **MCP** para que la IA actúe como un operario real:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                      <Terminal className="w-6 h-6 text-indigo-500 mb-4" />
                      <p className="text-sm font-bold text-white mb-2">Terminal</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Ejecuta procesos, instala librerías y corre diagnósticos.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                      <Layout className="w-6 h-6 text-indigo-500 mb-4" />
                      <p className="text-sm font-bold text-white mb-2">Sistema de Archivos</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Lee y escribe código directamente en tu proyecto local.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                      <Zap className="w-6 h-6 text-indigo-500 mb-4" />
                      <p className="text-sm font-bold text-white mb-2">Integraciones</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Conecta con APIs externas para automatizar todo el flujo.</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div
                key={activeSession.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-20"
              >
                {/* Session Header */}
                <header className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-indigo-400 font-mono text-xs italic">SESIÓN_0{activeSession.id}</span>
                    <div className="h-px bg-white/10 flex-1"></div>
                  </div>
                  <h2 className="text-8xl font-black tracking-tight leading-[0.85] gradient-text uppercase">
                    {activeSession.title}
                  </h2>
                  <p className="text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                    {activeSession.description}
                  </p>
                </header>

                <div className="flex flex-col gap-16 max-w-3xl mx-auto w-full">
                  {/* Introduction Section */}
                  <section className="relative p-10 rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
                    <div className="relative z-10 flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-indigo-400" />
                        <h3 className="text-sm font-black text-indigo-400 uppercase tracking-[0.3em]">Introducción</h3>
                      </div>
                      <p className="text-2xl text-gray-200 leading-relaxed font-light">
                        {activeSession.introduction}
                      </p>
                    </div>
                  </section>

                  {/* Quick Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: <Layout className="w-4 h-4" />, text: "Abre Antigravity en la carpeta del proyecto." },
                      { icon: <MessageSquare className="w-4 h-4" />, text: "Escribe el comando usando lenguaje claro." },
                      { icon: <Zap className="w-4 h-4" />, text: "Mira cómo el agente trabaja en tu terminal." }
                    ].map((tip, i) => (
                      <div key={i} className="flex flex-col gap-3 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <div className="text-indigo-500">{tip.icon}</div>
                        <p className="text-sm text-gray-400 leading-snug">{tip.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Instructions Card (Laboratorio Agente) - Now teaching Prompt Engineering */}
                  <div className="glass-card p-12 flex flex-col gap-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />

                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black flex items-center gap-4 text-white uppercase tracking-tighter">
                        <Terminal className="w-8 h-8 text-indigo-500" /> Ingeniería de Prompts
                      </h3>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] font-black uppercase">
                        <ShieldCheck className="w-3 h-3" /> Modo Guía Activo
                      </div>
                    </div>

                    <div className="flex flex-col gap-10">
                      <p className="text-gray-400 text-lg leading-relaxed italic border-l-2 border-indigo-500/30 pl-6">
                        "{activeSession.promptInstructions}"
                      </p>

                      <div className="grid grid-cols-1 gap-6">
                        {[
                          { label: "1. CONTEXTO", val: activeSession.promptComponents.context, color: "border-blue-500/20 text-blue-300" },
                          { label: "2. ACCIÓN", val: activeSession.promptComponents.action, color: "border-indigo-500/20 text-indigo-300" },
                          { label: "3. ESTILO / SALIDA", val: activeSession.promptComponents.style, color: "border-purple-500/20 text-purple-300" }
                        ].map((comp, i) => (
                          <div key={i} className={`p-6 rounded-2xl bg-black/40 border ${comp.color} flex flex-col gap-2`}>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{comp.label}</span>
                            <p className="font-mono text-sm leading-relaxed">{comp.val}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 text-center">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Tip de Director</p>
                        <p className="text-sm text-gray-400">Une estas partes y envíalas al agente mencionando que estás en <code>{activeSession.folder}</code>.</p>
                      </div>

                      <div className="flex items-center justify-between p-5 bg-black/20 rounded-2xl border border-white/5 text-gray-500 font-mono text-xs">
                        <span className="flex items-center gap-2"><Layout className="w-3 h-3" /> {activeSession.folder}</span>
                        <ArrowRight className="w-4 h-4 opacity-30" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* VISUAL PREVIEW / WORKSPACE */}
                {activeSession.id === "2" && (
                  <section className="flex flex-col gap-8">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="text-4xl font-black tracking-tight text-white uppercase">VISTA PREVIA</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Workspace Activo</span>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[50px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                      <div className="relative aspect-video w-full rounded-[48px] bg-[#0d0d10] border-8 border-[#1a1a20] flex items-center justify-center overflow-hidden shadow-2xl">
                        <div className="text-center flex flex-col gap-4 p-12">
                          <Sparkles className="w-12 h-12 text-gray-800 mx-auto animate-pulse" />
                          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-xs">Awaiting Generation</p>
                          <p className="text-gray-600 max-w-sm mx-auto text-sm font-light">
                            Una vez que Antigravity genere los archivos en <code>sesiones/02-proyecto-cv/</code>, este panel se actualizará automáticamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default App
