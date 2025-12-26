import { NeoButton } from '../components/NeoButton';

function App() {
  return (
    <div className="min-h-screen bg-neo-white p-8">
      <h1 className="text-4xl font-bold font-grotesk mb-8">Neobrut React Dev</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold font-grotesk mb-4">Components</h2>
        <p className="text-neo-black mb-4">Add components here as you build them!</p>

        <NeoButton onClick={() => console.log('clicked!')}>Click me</NeoButton>
      </section>
    </div>
  );
}

export default App;
