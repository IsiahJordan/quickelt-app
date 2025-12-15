import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ComponentProps } from 'react' 
import Badge from '@/components/Badge'

type StoryProps = ComponentProps<typeof Badge>; 

const meta: Meta<StoryProps> = { 
  component: Badge, 
  title: 'Badge', 
  tags: ['autodocs'], 
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof Badge>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const ActiveBadge: Story = {
  args: {
    label: 'Math'
  }
};

export const InactiveBadge: Story = {
  args: {
    variant: 'inactive',
    label: 'Science'
  }
};
