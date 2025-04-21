
import { useState } from 'react'

export default function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 32, color: '#1e3a8a' }}>Videolaringoscópio Inteligente</h1>
      <p style={{ marginTop: 10 }}>
        Visualize com precisão, reduza riscos e otimize procedimentos com nosso videolaringoscópio de última geração.
      </p>
      <button onClick={() => setIsVideoOpen(true)} style={{ marginTop: 20, padding: 10, backgroundColor: '#1e3a8a', color: 'white' }}>
        Ver Demonstração
      </button>
      {isVideoOpen && (
        <div style={{ marginTop: 20 }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demonstração do Videolaringoscópio" allowFullScreen></iframe>
        </div>
      )}
    </main>
  )
}
