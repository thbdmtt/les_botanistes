const THEFORK_WIDGET_URL = 'https://widget.thefork.com/ff0c7979-7a9b-4367-9fd6-1224900b9fce'

export default function ReservationForm() {
  return (
    <div className="card-luxe lg:sticky lg:top-32 overflow-hidden">
      <iframe
        src={THEFORK_WIDGET_URL}
        title="Reservation TheFork"
        allow="payment *"
        className="w-full min-h-[800px] border-0"
        style={{ overflow: 'scroll' }}
      />
    </div>
  )
}
