import {
  TooltipProvider,
  TooltipContainer,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'
import { ComponentProps /* ElementType */ } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  date: string // trocar par Date futuramente
  available?: boolean
}

export function Tooltip({ date, available = false, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          <button>{date.split(' ')[0]}</button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <>
              {date} - {available ? 'Disponível' : 'Indisponível'}
              <TooltipArrow />
            </>
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
