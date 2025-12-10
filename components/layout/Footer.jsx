import { Link } from '@/i18n/routing'
import { siteConfig } from '@/lib/config'
import Logo from '@/components/ui/Logo'
import { Separator } from '@/components/ui'

// Icône Instagram
function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// Icône Facebook
function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-noir text-blanc">
      {/* Section principale */}
      <div className="container-luxe section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Colonne 1 : Logo et description */}
          <div className="lg:col-span-1">
            <Logo className="text-blanc [&_span]:text-blanc [&_.text-gold]:text-gold" />
            <p className="mt-4 text-sm text-gris-chaud leading-relaxed">
              Cuisine bistronomique de saison au cœur du 7ème arrondissement.
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gris-fonce rounded-full transition-all duration-300 hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gris-fonce rounded-full transition-all duration-300 hover:border-gold hover:text-gold"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gris-chaud transition-colors duration-300 hover:text-gold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gold mb-6">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-gris-chaud">
              <p>
                {siteConfig.restaurant.address.street}<br />
                {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.restaurant.phone}`}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {siteConfig.restaurant.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.restaurant.email}`}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {siteConfig.restaurant.email}
                </a>
              </p>
            </address>
          </div>

          {/* Colonne 4 : Horaires */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gold mb-6">
              Horaires
            </h3>
            <div className="space-y-3 text-sm text-gris-chaud">
              <p>
                <span className="text-blanc">Déjeuner</span><br />
                {siteConfig.restaurant.hours.lunch}
              </p>
              <p>
                <span className="text-blanc">Dîner</span><br />
                {siteConfig.restaurant.hours.dinner}
              </p>
              <p className="text-gold/80">
                Fermé {siteConfig.restaurant.hours.closed}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="container-luxe">
        <Separator variant="gold-wide" className="opacity-30" />
      </div>

      {/* Section copyright */}
      <div className="container-luxe py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gris-chaud">
          <p>
            &copy; {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <nav className="flex items-center gap-6">
            {siteConfig.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-gold"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
