export interface Session {
    id: string;
    title: string;
    description: string;
    folder: string;
    prompt: string;
    completed: boolean;
}

export const SESSIONS: Session[] = [
    {
        id: "1",
        title: "Fundamentos Estelares",
        description: "Aprende a comunicarte con el Agente y configurar tu entorno de laboratorio.",
        folder: "sesiones/01-fundamentos",
        prompt: "Antigravity, analicemos la sesión 1. ¿Cómo podemos optimizar mi flujo de trabajo hoy?",
        completed: false
    },
    {
        id: "2",
        title: "Vende tu Marca Personal",
        description: "Crea una Landing Page premium basada en tu CV con estética Glassmorphism.",
        folder: "sesiones/02-proyecto-cv",
        prompt: "Antigravity, aquí está mi CV. Crea una landing page personal ultra-premium usando React y Framer Motion.",
        completed: false
    },
    {
        id: "3",
        title: "Automatización Avanzada",
        description: "Flujos complejos y despliegue automatizado.",
        folder: "sesiones/03-avanzado",
        prompt: "Antigravity, ayúdame a automatizar el despliegue de mi proyecto en Netlify.",
        completed: false
    }
];
