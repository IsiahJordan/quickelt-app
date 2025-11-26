import type { Meta, StoryObj } from '@storybook/react-vite' 
import { ComponentProps } from 'react' 
import Button from '@/components/Button' 

type StoryProps = ComponentProps<typeof Button>; 

const meta: Meta<StoryProps> = { 
  component: Button, 
  title: 'Button', 
  tags: ['autodocs'], 
} satisfies Meta<typeof Button>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const Primary: Story = {}; 
export const Secondary: Story = { 
  args: { 
    variant: 'secondary' 
  } 
};
export const Accent: Story = { 
  args: { 
    variant: 'accent' 
  } 
};
export const NoFill: Story = { 
  args: { 
    variant: 'nofill',
    color: 'text-alt'
  }
};
