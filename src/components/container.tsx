import { cn } from '@/lib/utils'

import { FC, HTMLAttributes, ReactNode } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto w-full max-w-grid px-3', className)}>
      {children}
    </div>
  )
}
