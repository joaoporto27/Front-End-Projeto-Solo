import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen h-full flex flex-col justify-center" 
         style={{
           backgroundColor: '#0F4D84',
           backgroundImage: 'repeating-linear-gradient(120deg, rgba(255,255,255,.1), transparent 1px)',
           backgroundAttachment: 'fixed'
         }}>
      <header className="text-center"> 
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          Deck Royale
        </h1>
      </header>
      <main>
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white">Sobre a API</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bem-vindo ao Deck Royale! Aqui você pode explorar cartas, ver o perfil perfil do desenvolvedor e descobrir tudo sobre as cartas do universo de Clash Royale usando essa API.
          </p>
        </section>
       <section className="text-center">
  <div className="flex gap-4 justify-center">
      <Link
        href="/perfil"
        className="relative rounded-2xl w-80 h-20 cursor-pointer my-5 flex items-center justify-center no-underline font-black text-3xl uppercase tracking-wider transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1 active:transform active:translate-y-1 border-4"
        style={{
          background: 'linear-gradient(135deg, #ffcc02 0%, #ff9500 50%, #ff7b00 100%)',
          borderColor: '#2d1810',
          boxShadow: '0px 8px 0px #d4820a, 0px 12px 20px rgba(0, 0, 0, 0.4)',
          color: '#2d1810',
          textShadow: '2px 2px 0px #ffee77, -1px -1px 0px #cc7700'
        }}
      >
        <span className="absolute top-1 left-1 right-1 h-5 rounded-t-lg rounded-b-3xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)'
              }}>
        </span>
        Ver Perfil
      </Link>
    <Link
      href="/cards"
      className="relative rounded-2xl w-80 h-20 cursor-pointer my-5 flex items-center justify-center no-underline font-black text-3xl uppercase tracking-wider transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1 active:transform active:translate-y-1 border-4"
      style={{
        background: 'linear-gradient(135deg, #ffcc02 0%, #ff9500 50%, #ff7b00 100%)',
        borderColor: '#2d1810',
        boxShadow: '0px 8px 0px #d4820a, 0px 12px 20px rgba(0, 0, 0, 0.4)',
        color: '#2d1810',
        textShadow: '2px 2px 0px #ffee77, -1px -1px 0px #cc7700'
      }}
    >
      <span className="absolute top-1 left-1 right-1 h-5 rounded-t-lg rounded-b-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)'
            }}>
      </span>
      Ver Cartas
    </Link>
    <Link
      href="/contato"
      className="relative rounded-2xl w-80 h-20 cursor-pointer my-5 flex items-center justify-center no-underline font-black text-3xl uppercase tracking-wider transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1 active:transform active:translate-y-1 border-4"
      style={{
        background: 'linear-gradient(135deg, #ffcc02 0%, #ff9500 50%, #ff7b00 100%)',
        borderColor: '#2d1810',
        boxShadow: '0px 8px 0px #d4820a, 0px 12px 20px rgba(0, 0, 0, 0.4)',
        color: '#2d1810',
        textShadow: '2px 2px 0px #ffee77, -1px -1px 0px #cc7700'
      }}
    >
      <span className="absolute top-1 left-1 right-1 h-5 rounded-t-lg rounded-b-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)'
            }}>
      </span>
      Contato
    </Link>
  </div>
</section>
      </main>
    </div>
  );
}