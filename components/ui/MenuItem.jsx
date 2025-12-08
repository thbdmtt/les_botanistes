import { cn } from '@/lib/utils'

export default function MenuItem({
  name,
  description,
  price,
  tag,
  className,
}) {
  return (
    <div className={cn('group py-6 border-b border-border last:border-0', className)}>
      <div className="flex items-baseline justify-between gap-4">
        {/* Nom du plat */}
        <h3 className="font-serif text-lg sm:text-xl group-hover:text-gold transition-colors duration-300">
          {name}
          {tag && (
            <span className="ml-2 text-xs uppercase tracking-wider text-gold font-sans">
              {tag}
            </span>
          )}
        </h3>

        {/* Ligne pointillée */}
        <span className="flex-1 border-b border-dotted border-muted-foreground/30 mb-1.5 mx-2" />

        {/* Prix */}
        <span className="font-sans text-gold font-medium whitespace-nowrap">
          {price} €
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
