import { ReserveActionJsonLd } from '@/lib/jsonld'

/**
 * Layout for booking pages
 * Injects ReserveActionJsonLd for SEO on reservation page
 */
export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ReserveActionJsonLd />
      {children}
    </>
  )
}
