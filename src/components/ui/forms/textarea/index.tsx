import { HTMLProps, useMemo } from 'react'

import { cn } from '@/lib/utils'

import * as config from '../config'

interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'size'> {
  className?: string
  label?: string
  hint?: string
  variant?: config.Variant
  append?: React.ReactNode | string
  containerClass?: string
  labelClassname?: string
  error?: string
  size?: config.Size
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  required,
  hint,
  variant = 'default',
  containerClass,
  labelClassname,
  error,
  size,
  ...rest
}) => {
  const theme = useMemo(() => config.theme(variant), [variant])
  const sizes = useMemo(() => config.sizes(size), [size])

  return (
    <div className={cn('flex flex-col space-y-2', containerClass)}>
      {label && (
        <label className={cn('text-sm mb-1 text-left', theme.labelColor, labelClassname)}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          rows={3}
          className={cn(
            'px-3 focus:border-green-tea py-3 rounded bg-transparent text-bianca text-base focus:outline-none border-2 w-full disabled:border-opacity-10 disabled:text-opacity-10',
            `placeholder:${theme.hintColor} placeholder:text-opacity-80`,
            theme.borderColor,
            sizes,
            className
          )}
          required={required}
          {...rest}
        />
      </div>
      {hint && <span className={cn('text-xs font-light text-left', theme.hintColor)}>{hint}</span>}
      {error && <span className={cn('text-xs font-light text-left text-red-400', theme.hintColor)}>{error}</span>}
    </div>
  )
}
