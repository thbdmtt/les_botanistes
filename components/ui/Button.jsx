'use client'

import { forwardRef } from 'react'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

const sizes = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
}

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    disabled,
    loading,
    icon,
    iconPosition = 'left',
    ...props
  },
  ref
) {
  const baseClasses = cn(
    variants[variant],
    variant !== 'link' && sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    loading && 'relative text-transparent',
    className
  )

  const content = (
    <>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && (
        <span className={loading ? 'invisible' : ''}>{icon}</span>
      )}
      <span className={loading ? 'invisible' : ''}>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={loading ? 'invisible' : ''}>{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} ref={ref} className={baseClasses} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button ref={ref} className={baseClasses} disabled={disabled} {...props}>
      {content}
    </button>
  )
})

export default Button
