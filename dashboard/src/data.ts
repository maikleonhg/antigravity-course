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
        introduction: "El agente ya ha clonado el repositorio y lanzado este dashboard. Ahora, usaremos la Sesión 1 para confirmar que el entorno cumple con los estándares del proyecto y, lo más importante, ¡para que empieces a charlar con él!",
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
        title: "Tu Portafolio: Del Intento al Código",
        description: "Aprende a definir tu intención clara antes de construir tu propia subpágina personal.",
        introduction: "En esta sesión entenderás que programar no es escribir líneas, sino definir intenciones. Usaremos este mismo dashboard para crear una subpágina personalizada (ej. /mi-perfil) donde empezarás a construir tu marca personal de forma incremental.",
        folder: "sesiones/02-proyecto-cv",
        promptInstructions: "Define tu perfil (¿quién eres? ¿qué haces?) y pídele al agente que cree un componente para una nueva ruta en el dashboard. Empieza por una estructura básica y luego iteraremos en el diseño.",
        promptComponents: {
            context: "Trabajando en la Sesión 2, dentro del proyecto dashboard/.",
            action: "Crea una nueva ruta en el router (ej: /portafolio) y un componente para mi página personal con una estructura básica de: Herp, Sobre mí y Proyectos.",
            style: "Limpio y profesional. No te preocupes por los detalles visuales finales ahora, enfoquémonos en que la estructura sea correcta."
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
