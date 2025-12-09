import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du restaurant Les Botanistes. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation du site.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: '/mentions-legales',
  },
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-xl sm:text-2xl text-gold mb-4">{title}</h2>
      <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4">
        {children}
      </div>
    </section>
  )
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        subtitle="Informations légales"
        title="Mentions légales"
      />

      <article className="pb-16 sm:pb-24">
        <div className="container-narrow">

          <Section title="1. Éditeur du site">
            <p>
              Le site <strong>les-botanistes.fr</strong> est édité par :
            </p>
            <p>
              <strong>{siteConfig.name}</strong><br />
              Société par Actions Simplifiée (SAS)<br />
              Capital social : 50 000 €<br />
              RCS Paris : 123 456 789<br />
              N° TVA Intracommunautaire : FR 12 345678901
            </p>
            <p>
              <strong>Siège social :</strong><br />
              {siteConfig.restaurant.address.street}<br />
              {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}
            </p>
            <p>
              <strong>Directeur de la publication :</strong> M. Jean Dupont, Gérant
            </p>
          </Section>

          <Section title="2. Hébergeur">
            <p>
              Le site est hébergé par :
            </p>
            <p>
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              Site web : vercel.com
            </p>
          </Section>

          <Section title="3. Contact">
            <p>
              Pour toute question relative au site ou à son contenu :
            </p>
            <p>
              Téléphone : {siteConfig.restaurant.phone}<br />
              Email : {siteConfig.restaurant.email}
            </p>
          </Section>

          <Section title="4. Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes,
              icônes, etc.) est la propriété exclusive de {siteConfig.name} ou de ses partenaires
              et est protégé par les lois françaises et internationales relatives à la propriété
              intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, transmission,
              dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé
              que ce soit, et sur quelque support que ce soit est interdite sans l&apos;autorisation
              écrite préalable de {siteConfig.name}.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de son contenu serait constitutive
              d&apos;une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de
              la propriété intellectuelle.
            </p>
          </Section>

          <Section title="5. Limitation de responsabilité">
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site
              est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes,
              des omissions ou des lacunes.
            </p>
            <p>
              {siteConfig.name} ne pourra être tenu responsable des dommages directs et indirects
              causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site, et résultant soit de
              l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications techniques requises,
              soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
            </p>
          </Section>

          <Section title="6. Liens hypertextes">
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites. {siteConfig.name}
              n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur
              contenu ou aux éventuels collectes de données qu&apos;ils pourraient opérer.
            </p>
          </Section>

          <Section title="7. Droit applicable">
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </Section>

          <Section title="8. Crédits">
            <p>
              <strong>Conception et développement :</strong> Studio Digital<br />
              <strong>Photographies :</strong> © {siteConfig.name}<br />
              <strong>Icônes :</strong> Heroicons
            </p>
          </Section>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
