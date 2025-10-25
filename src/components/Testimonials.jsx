export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4 text-gray-600">"Amazing experience with Adissia!"</p>
              <div className="flex justify-center mb-2">
                {'★★★★★'.split('').map((star, idx) => (
                  <span key={idx} className="text-yellow-400">{star}</span>
                ))}
              </div>
              <h4 className="font-bold">Happy Customer {i}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
