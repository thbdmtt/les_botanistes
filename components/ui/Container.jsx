import { cn } from '@/lib/utils'

const sizes = {
  default: 'container-luxe',
  narrow: 'container-narrow',
  wide: 'container-wide',
  full: 'w-full px-4 sm:px-6 lg:px-8',
}

export default function Container({
  children,
  size = 'default',
  className,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component className={cn(sizes[size], className)} {...props}>
      {children}
    </Component>
  )
}
