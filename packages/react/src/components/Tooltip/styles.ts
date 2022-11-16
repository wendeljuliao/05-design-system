import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '16px 26px',
  backgroundColor: '$gray600',
  borderRadius: '$sm',

  color: '$white',
  lineHeight: '$base',
  fontSize: '$md',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$gray100',

  textAlign: 'center',

  display: 'flex',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {})
