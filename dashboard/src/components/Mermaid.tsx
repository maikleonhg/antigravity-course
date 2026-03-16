import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    themeVariables: {
        fontFamily: 'Outfit',
        primaryColor: '#6366f1',
        lineColor: '#6366f1',
        primaryTextColor: '#fff',
        primaryBorderColor: '#6366f1',
        nodeBorder: '#6366f1',
        clusterBkg: '#16161a',
    }
})

interface MermaidProps {
    chart: string
}

export const Mermaid = ({ chart }: MermaidProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            mermaid.contentLoaded()
            // Force re-render of mermaid
            ref.current.removeAttribute('data-processed')
            mermaid.render('mermaid-svg-' + Math.random().toString(36).substr(2, 9), chart).then(({ svg }) => {
                if (ref.current) {
                    ref.current.innerHTML = svg
                }
            })
        }
    }, [chart])

    return (
        <div className="flex justify-center p-8 bg-black/20 rounded-2xl border border-white/5 overflow-hidden">
            <div ref={ref} className="mermaid w-full max-w-2xl" />
        </div>
    )
}
