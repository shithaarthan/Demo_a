export default function Presence() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Multi-City Presence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Coimbatore</h3>
            <p>Head office and development hub</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Chennai</h3>
            <p>Regional office for expansion</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Dubai</h3>
            <p>NRI office for global clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
