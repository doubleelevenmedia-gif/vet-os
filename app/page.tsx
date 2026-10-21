export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-xl font-bold">🐾 VetOS Caribbean</span>
        <span className="rounded-full bg-teal-100 px-4 py-2 text-sm text-teal-900">Coming soon</span>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-semibold uppercase tracking-widest text-teal-700">Made for Trinidad & Tobago</p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">Better care. Simpler clinics.</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">A simpler way to discover veterinary clinics, organize your pet’s information, and request appointments. Our pilot is in development.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Find a Vet", "Discover participating veterinary clinics."],
            ["Pet Passport", "Organize your pet’s key information."],
            ["Clinic Tools", "Manage appointment enquiries and follow-ups."],
          ].map(([title, subtitle]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-slate-600">{subtitle}</p></article>)}
        </div>
        <p className="mt-10 text-sm text-slate-500">Preview only. No appointments are currently accepted through this site.</p>
      </section>
    </main>
  );
}
