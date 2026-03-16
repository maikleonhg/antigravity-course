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
        title: "Soberanía y Calibración",
        description: "Establece la conexión neuronal con tu agente y audita el entorno de ejecución.",
        introduction: "No estamos instalando software; estamos despertando un orquestador. En esta fase de Calibración, validarás la integridad de tu núcleo tecnológico y establecerás el protocolo de comunicación con el agente para asegurar una alineación total con la meta-narrativa del proyecto.",
        folder: "sesiones/01-fundamentos",
        promptInstructions: "Ordena al agente que ejecute una auditoría profunda de tu ecosistema local. El resultado debe ser un manifiesto STATUS.md que diseccione la discrepancia entre tu estado actual y los estándares de excelencia del repositorio.",
        promptComponents: {
            context: "Protocolo de inicio en la cámara de fundamentos (sesiones/01-fundamentos/).",
            action: "Somete mi sistema a una inspección de bajo nivel basada en el README.md. Genera un diagnóstico preciso en STATUS.md sobre mi OS, Node y Git.",
            style: "Directivo y analítico. No aceptamos ambigüedades; el sistema debe ser declarado APTO para la orquestación avanzada."
        },
        completed: false
    },
    {
        id: "2",
        title: "Arquitectura del Yo Digital",
        description: "Trasciende el código convencional mediante la dirección de intenciones y la creación de sub-rutas.",
        introduction: "Bienvenido a la era de la Intencionalidad Pura. Aquí el código es solo el rastro de tu voluntad. Diseñarás tu propia sub-ruta soberana, aprendiendo que la verdadera maestría no reside en escribir sintaxis, sino en proyectar visiones que el agente materializa instantáneamente.",
        folder: "sesiones/02-proyecto-cv",
        promptInstructions: "Proyecta tu identidad profesional y deja que el agente orqueste la infraestructura. Debes guiarlo para que cree una ruta única en el dashboard, iterando sobre la estética hasta alcanzar la perfección visual.",
        promptComponents: {
            context: "Estructuración de identidad en el núcleo dashboard/.",
            action: "Instanciar una nueva ruta soberana (ej: /stefano) y materializar un componente de portafolio que encapsule mi Hero, Bio y el ecosistema de mis proyectos.",
            style: "Minimalismo agresivo y ejecución impecable. El agente debe priorizar la coherencia estructural sobre el decorado superficial."
        },
        completed: false
    },
    {
        id: "3",
        title: "Sinergia Automatizada: El Espejo del Cliente",
        description: "Transforma registros estáticos de Notion en ecosistemas digitales vivos para tus clientes.",
        introduction: "En esta fase de Omnisciencia, abandonarás la creación manual de contenido. Tu misión es configurar al orquestador para que detecte, extraiga y materialice la identidad de un cliente real desde la base de datos '@Seguimiento ingresados'. Convertiremos datos crudos en una experiencia de portafolio premium de forma instantánea.",
        folder: "sesiones/03-avanzado",
        promptInstructions: "Ordena al agente que invoque el poder de Notion MCP para localizar un perfil específico en '@Seguimiento ingresados'. La información recolectada debe fusionarse con la arquitectura de 'PortfolioTeam.tsx' para dar vida al portafolio de un cliente real.",
        promptComponents: {
            context: "Orquestación de portafolios dinámicos en la Sesión 3.",
            action: "Accede a Notion MCP, identifica a un cliente en '@Seguimiento ingresados' y materializa su portafolio en 'PortfolioTeam.tsx'. El diseño debe adaptarse orgánicamente a los proyectos y habilidades registrados en su perfil de Notion.",
            style: "Industrial y elegante. El resultado debe ser un producto final que podrías entregar a un cliente real en segundos."
        },
        completed: false
    }
];
