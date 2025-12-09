import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du restaurant Les Botanistes. Informations sur la collecte et le traitement de vos données personnelles.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: '/confidentialite',
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

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader
        subtitle="Protection des données"
        title="Politique de confidentialité"
      />

      <article className="pb-16 sm:pb-24">
        <div className="container-narrow">

          <div className="mb-12 p-6 bg-muted rounded-sm border-l-2 border-gold">
            <p className="text-sm text-muted-foreground">
              La protection de vos données personnelles est une priorité pour {siteConfig.name}.
              Cette politique de confidentialité vous informe sur la manière dont nous collectons,
              utilisons et protégeons vos informations personnelles conformément au Règlement
              Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <Section title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <p>
              <strong>{siteConfig.name}</strong><br />
              {siteConfig.restaurant.address.street}<br />
              {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}<br />
              Email : {siteConfig.restaurant.email}
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p>
              Nous collectons les données personnelles que vous nous fournissez volontairement :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Réservation :</strong> nom, prénom, email, téléphone, date et heure
                souhaitées, nombre de convives, allergies ou régimes alimentaires
              </li>
              <li>
                <strong>Formulaire de contact :</strong> nom, prénom, email, téléphone, objet
                et contenu du message
              </li>
              <li>
                <strong>Newsletter :</strong> adresse email (si vous vous inscrivez)
              </li>
            </ul>
            <p>
              Nous collectons également automatiquement certaines données techniques lors de
              votre navigation (adresse IP, type de navigateur, pages visitées) à des fins
              d&apos;amélioration de nos services.
            </p>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gérer vos réservations et demandes de privatisation</li>
              <li>Répondre à vos questions et demandes via le formulaire de contact</li>
              <li>Vous envoyer des informations sur nos événements (avec votre consentement)</li>
              <li>Améliorer nos services et l&apos;expérience utilisateur du site</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </Section>

          <Section title="4. Base légale du traitement">
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>L&apos;exécution d&apos;un contrat :</strong> pour la gestion de vos réservations
              </li>
              <li>
                <strong>Votre consentement :</strong> pour l&apos;envoi de communications marketing
              </li>
              <li>
                <strong>Notre intérêt légitime :</strong> pour l&apos;amélioration de nos services
              </li>
              <li>
                <strong>Le respect d&apos;obligations légales :</strong> pour la conservation de
                certaines données
              </li>
            </ul>
          </Section>

          <Section title="5. Destinataires des données">
            <p>
              Vos données personnelles sont destinées uniquement au personnel habilité de
              {siteConfig.name} et ne sont jamais vendues à des tiers.
            </p>
            <p>
              Elles peuvent être partagées avec nos prestataires techniques (hébergement,
              outils de gestion) qui agissent en tant que sous-traitants et sont soumis aux
              mêmes obligations de confidentialité.
            </p>
          </Section>

          <Section title="6. Durée de conservation">
            <p>
              Vos données personnelles sont conservées pendant :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Données de réservation :</strong> 3 ans après la dernière visite
              </li>
              <li>
                <strong>Données de contact :</strong> 3 ans après le dernier échange
              </li>
              <li>
                <strong>Données de facturation :</strong> 10 ans (obligation légale)
              </li>
              <li>
                <strong>Newsletter :</strong> jusqu&apos;à votre désinscription
              </li>
            </ul>
          </Section>

          <Section title="7. Vos droits">
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des données inexactes
              </li>
              <li>
                <strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données
              </li>
              <li>
                <strong>Droit à la limitation :</strong> restreindre le traitement de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : {siteConfig.restaurant.email}
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL
              (Commission Nationale de l&apos;Informatique et des Libertés).
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Notre site utilise des cookies pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site
                (préférence de thème, session)
              </li>
              <li>
                <strong>Cookies analytiques :</strong> pour comprendre l&apos;utilisation du site
                et l&apos;améliorer (avec votre consentement)
              </li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </Section>

          <Section title="9. Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles contre tout accès non autorisé, perte,
              destruction ou altération :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement SSL/TLS des communications</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières et sécurisées</li>
              <li>Formation du personnel à la protection des données</li>
            </ul>
          </Section>

          <Section title="10. Modifications">
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité
              à tout moment. Les modifications entrent en vigueur dès leur publication sur
              le site. Nous vous encourageons à consulter régulièrement cette page.
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
