export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">

      <header className="flex justify-between items-center px-12 py-6
      bg-primary-300">
        <h1 className="text-2xl tracking-tighter font-medium">
          SpaceX Dashboard
        </h1>
      </header>

      <div className="grid grid-cols-[350px_1fr] h-screen w-full p-4">
        <aside className="flex flex-col w-full col-span-1 p-6 flex-1
        rounded-3xl bg-primary-300 ring ring-inset ring-white/10">
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
          <div className="flex bg-amber-100 rounded-3xl">
            ola
          </div>
        </main>
      </div>
    </div>
  );
}
