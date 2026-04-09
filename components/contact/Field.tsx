'use client'

interface FieldProps {
  label: string
  id: string
  required?: boolean
  children: React.ReactNode
}

export function Field({ label, id, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary ml-1" aria-hidden>*</span>}
      </label>
      {children}
    </div>
  )
}