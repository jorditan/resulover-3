import { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  },);

  return (
    <>
      <div
        className="cursor-bubble"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}

      >

      </div>
      <section className="h-[100vh] relative z-10">
        <article className="justify-center flex h-full w-full flex-col gap-5 items-center">
          <div className="w-2/4 flex-col gap-5 items-center justify-center flex">
            <div className="flex gap-2 flex-col items-center">
              <h1 className="text-3xl font-bold">Automatiza la generación de tus resumenes con IA</h1>
              <p className="2/4 text-center">¿Necesitas encontrar los aspectos más importantes de un artículo? Tranquilo, agregá tu URL y el resumen se generará automágicamente 🧙</p>
            </div>
            <div className="flex gap-2 w-2/4">
              <input
                type="url"
                placeholder="https://articuloRandom.com"
                pattern="https://.*"
                name="url"
                id="url"
                required
                className="input w-full" />
              <button className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>
                Resumir</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
