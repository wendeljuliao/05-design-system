import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  padding: '$3 $5',
  gap: '$1',
  width: '22.5rem',
  height: '5.125rem',

  background: '$gray800',

  border: '1px solid $gray500',
  boxSizing: 'border-box',
  borderRadius: '$sm',

  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$base',
  fontSize: '$xl',

  width: '100%',
})

export const ToastTitleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  svg: {
    cursor: 'pointer',
    color: '$gray200',
  },
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$gray200',
  lineHeight: '$base',
  fontSize: '$sm',
})

export const ToastAction = styled(Toast.Action, {})

// export const ToastClose = styled(Toast.Close, {})

export const ToastViewport = styled(Toast.Viewport, {})
