import { cn } from '@/lib/utils'

import { FC, HTMLAttributes, ReactNode } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('max-w-grid mx-auto w-full px-3', className)}>
      {children}
    </div>
  )
}
