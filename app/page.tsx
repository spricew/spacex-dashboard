import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Header />
      <div className="absolute inset-0 -z-50 w-full h-screen">
        <picture className="absolute inset-0 w-full h-full">
          <img src="/earthBg.jpg"
            className="object-cover w-full h-full" />
        </picture>
      </div>

      

      <div className="grid grid-cols-[350px_1fr] gap-4 h-screen w-full p-4">
        <aside className="flex flex-col w-full col-span-1 p-6 flex-1
        rounded-3xl ring ring-inset ring-white/10
        bg-black/10 backdrop-blur-xl shadow-lg shadow-black/20">
          <h2 className="mb-4 font-semibold">Dashboard</h2>
          <nav>
            <ul className="space-y-2">
              <li><a href="/launches">Launches</a></li>
              <li><a href="/rockets">Rockets</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </aside>

        <main className="grid grid-rows-[200px_1fr]">
          <div className="grid grid-cols-[42em_1fr_1fr] gap-4">
            <div className="relative bg-primary-300 rounded-3xl -z-10 overflow-hidden">
              <picture className="absolute inset-0 w-full h-full">
                <img src="https://muyinteresante.okdiario.com/wp-content/uploads/sites/5/2024/07/09/668d54e1b6bfa-e1736353489521.png?w=800"
                  className="object-cover w-full h-full" />
              </picture>
            </div>
            <div className="flex justify-center items-center w-full h-full
            rounded-3xl ring ring-inset ring-white/10
           bg-white/10 backdrop-blur-xl shadow-lg shadow-black/20">
              Tarjeta 1
            </div>
            <div className="flex justify-center items-center w-full h-full
            rounded-3xl ring ring-inset ring-white/10
           bg-white/10 backdrop-blur-xl shadow-lg shadow-black/20">
              Tarjeta 2
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
