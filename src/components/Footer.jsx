import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/images/logo.svg" alt="Adissia" className="w-32 mb-4" />
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2"><span>+91 9159066666</span></p>
              <p className="flex items-center gap-2"><span>support@adissia.com</span></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'About Us', 'Projects', 'NRI', 'Careers', 'Blogs', 'News', 'Contact'].map(item => (
                <li key={item}><a href="#" className="hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Projects</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">The Address 2.0</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Adissia One World</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Echo Valley</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">MK Grand</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-brand transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Crafted with excellence for your future
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Adissia Developers Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
