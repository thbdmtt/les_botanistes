import { cn } from '@/lib/utils'

const variants = {
  gold: 'separator-gold',
  'gold-wide': 'separator-gold-wide',
  muted: 'h-px w-full bg-border',
  'muted-short': 'h-px w-16 bg-border',
}

export default function Separator({
  variant = 'gold',
  className,
  decorative = true,
  ...props
}) {
  return (
    <div
      role={decorative ? 'presentation' : 'separator'}
      aria-orientation="horizontal"
      className={cn(variants[variant], className)}
      {...props}
    />
  )
}
