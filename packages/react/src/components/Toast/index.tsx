import {
  ToastProvider,
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
  ToastTitleContainer,
} from './styles'
import { ComponentProps /* ElementType */ } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastProvider> {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  return (
    <ToastProvider>
      <ToastContainer open={true}>
        <ToastTitle>
          <ToastTitleContainer>
            <span>{title}</span>
            <ToastAction asChild altText="X">
              <X size={24} />
            </ToastAction>
          </ToastTitleContainer>
        </ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}
