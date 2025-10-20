import { ResumeBar } from './components/ResumeBar';
import { CustomHeader } from './components/CustomHeader';
import { ResumeList } from './components/ResumeList';
import { mockResumes } from './mock/DataMock'
import { GradientBackground } from './components/GradientBackground';

function App() {
  return (
    <>
      <GradientBackground />
      <section className="text-container">
        <article className="justify-center flex h-auto w-full flex-col gap-8 items-center">
          <div className="w-2/4 flex-col gap-5 items-center justify-center flex">
            <CustomHeader header='Automatiza la generación de tus resumenes con IA' description="¿Necesitas encontrar los aspectos más importantes de un artículo? Tranquilo, agregá tu URL y el resumen se generará automágicamente 🧙" />
            <ResumeBar placeholder='https://articuloRandom.com' />
          </div>
          <ResumeList resumes={mockResumes} />
        </article>
      </section>
    </>
  );
}

export default App;
