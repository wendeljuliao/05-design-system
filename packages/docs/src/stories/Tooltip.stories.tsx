import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@wendel-ignite-ui/react'

export default {
  title: 'Show/Tooltip',
  component: Tooltip,
  args: {
    date: '26 de Outubro',
    available: true,
  },
  argTypes: {
    date: {
      control: {
        type: 'text',
      },
    },
    available: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
