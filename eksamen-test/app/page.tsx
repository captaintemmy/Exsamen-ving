import Image from "next/image";

export default function Home() {
  // Hardcoded example data
  const user = {
    name: "Ola Nordmann",
    totalUnits: 128,
    deposits: [
      { date: "2025-05-01", units: 11, container: "Sentrum" },
      { date: "2025-04-20", units: 7, container: "Grønland" },
      { date: "2025-04-10", units: 15, container: "Majorstuen" },
    ],
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#18181b] dark:to-[#23272f] flex flex-col items-center py-12 px-4">
      <section className="w-full max-w-3xl flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/logo.svg"
            alt="Pantelotteri Logo"
            width={56}
            height={56}
            className="drop-shadow"
            priority
          />
          <h1 className="text-4xl font-extr bold text-gray-900 dark:text-white tracking-tight">
            Hei, {user.name}!
          </h1>
          
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Her får du oversikt over hvor mange enheter du har resirkulert, og dine siste innleveringer.
        </p>
      </section>

      <section className="w-full max-w-2xl bg-white/90 dark:bg-[#23272f]/90 backdrop-blur rounded-3xl shadow-xl p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2 tracking-wide uppercase">
          Totalt resirkulert
        </h2>
        <div className="text-6xl font-extrabold text-green-600 dark:text-green-400 mb-6 drop-shadow">
          {user.totalUnits}
        </div>
        <h3 className="text-base font-medium text-gray-700 dark:text-gray-200 mb-3">
          Siste innleveringer
        </h3>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-gray-500 dark:text-gray-400 font-semibold py-2 px-3">Dato</th>
                <th className="text-gray-500 dark:text-gray-400 font-semibold py-2 px-3">Antall</th>
                <th className="text-gray-500 dark:text-gray-400 font-semibold py-2 px-3">Konteiner</th>
              </tr>
            </thead>
            <tbody>
              {user.deposits.map((dep, idx) => (
                <tr
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900 transition rounded-lg"
                >
                  <td className="py-2 px-3 rounded-l-lg">{dep.date}</td>
                  <td className="py-2 px-3">{dep.units}</td>
                  <td className="py-2 px-3 rounded-r-lg">{dep.container}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}