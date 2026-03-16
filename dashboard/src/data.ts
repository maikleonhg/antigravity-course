export interface PromptComponents {
    context: string;
    action: string;
    style: string;
}

export interface Session {
    id: string;
    title: string;
    description: string;
    introduction: string;
    folder: string;
    promptInstructions: string;
    promptComponents: PromptComponents;
    completed: boolean;
}

export const SESSIONS: Session[] = [
    {
        id: "1",
        title: "Calibración del Sistema",
        description: "Confirma que tu agente ha configurado todo correctamente analizando el README.",
        introduction: "El agente ya ha clonado el repositorio y lanzado este dashboard. Ahora, usaremos la Sesión 1 para confirmar que el entorno cumple con los estándares del proyecto descritos en el Manifiesto (README).",
        folder: "sesiones/01-fundamentos",
        promptInstructions: "Pide al agente que lea el README raíz y genere un reporte STATUS.md comparando tu sistema actual con los requisitos solicitados en el archivo.",
        promptComponents: {
            context: "Trabajando en la Sesión 1 (sesiones/01-fundamentos/).",
            action: "Lee el README.md raíz. Compara mi OS, Node y Git con los requisitos que pide el archivo. Crea un reporte en STATUS.md.",
            style: "Sé meticuloso. Si mi sistema cumple con todo, confírmalo para empezar a trabajar localmente."
        },
        completed: false
    },
    {
        id: "2",
        title: "Vende tu Marca Personal",
        description: "Crea una Landing Page premium basada en tu CV con estética Glassmorphism.",
        introduction: "Ahora que el sistema está verificado, vamos a subir el nivel. Construiremos una presencia digital que destaque usando tecnologías modernas.",
        folder: "sesiones/02-proyecto-cv",
        promptInstructions: "Diseña un prompt que describa la estética que buscas. Menciona React, Tailwind CSS v4 y el concepto de Glassmorphism.",
        promptComponents: {
            context: "Sesión 2, trabajando en sesiones/02-proyecto-cv/.",
            action: "Genera una Landing Page completa usando React, Vite y Framer Motion.",
            style: "Usa estética Glassmorphism (cristal), colores oscuros premium e interacciones fluidas."
        },
        completed: false
    },
    {
        id: "3",
        title: "Automatización Avanzada",
        description: "Flujos complejos y despliegue automatizado.",
        introduction: "El toque final. Aprenderás a llevar tus creaciones al mundo real de manera automatizada.",
        folder: "sesiones/03-avanzado",
        promptInstructions: "El prompt debe pedir una configuración de CI/CD. Especifica tu plataforma de despliegue preferida (Netlify o Vercel).",
        promptComponents: {
            context: "Proyecto terminado en Sesión 2.",
            action: "Configura un workflow de GitHub Actions para despliegue automático.",
            style: "Explícame cada paso técnicamente pero de forma clara, como un manual de vuelo."
        },
        completed: false
    }
];
