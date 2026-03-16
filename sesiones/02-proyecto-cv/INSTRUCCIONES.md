# SESIÓN 02: TU PORTAFOLIO - DEL INTENTO AL CÓDIGO

Bienvenido a la sesión donde dejas de ser un espectador y te conviertes en el **Director** de tu propio software.

## 🧠 La Filosofía: Primero el "Qué", luego el "Cómo"

El error más común es empezar a escribir código sin saber qué queremos lograr. En esta sesión, vamos a practicar el **Vibecoding** real:
1. **Define tu Intento**: ¿Qué quieres que la gente sienta al entrar a tu portafolio?
2. **Estructura Simple**: No intentes hacer el sitio final de un solo golpe. Empieza con un "esqueleto" (Hero, Sobre mí, Contacto).
3. **Iteración Continua**: Una vez que la estructura esté viva, pide al agente que añada colores, animaciones y MCPs.

## 🚀 Tu Misión: Crear tu propia Sub-Ruta

Vamos a utilizar la arquitectura que ya configuramos en el Dashboard para añadir tu propia página.

**¿Qué debe hacer el agente?**
1. Crear un nuevo componente React para tu portafolio en `dashboard/src/components/PortfolioStefano.tsx` (usa tu nombre).
2. Modificar `dashboard/src/App.tsx` para importar ese componente y añadir una ruta: `<Route path="/portafolio_stefano" element={<PortfolioStefano />} />`.
3. Asegurarse de que el dashboard refleje este cambio.

### 📝 Ejemplo de Prompt para el Agente:

> "Agente, vamos a iniciar la Sesión 2. Mi intención es crear una página minimalista para mi portafolio profesional. 
> 
> 1. Crea un componente `PortfolioStefano.tsx` en `dashboard/src/components/` con una estructura básica (Hero, Bio, Proyectos).
> 2. Regístralo en `App.tsx` bajo la ruta `/portafolio_stefano`.
> 3. Quiero que el diseño sea brutalmente simple por ahora, solo texto y una estructura limpia."

---

*🎯 Objetivo: Aprender que el agente puede expandir aplicaciones existentes de forma orgánica simplemente pidiéndole nuevas "piezas" o rutas.*
