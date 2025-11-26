import type { Meta, StoryObj } from '@storybook/react-vite' 
import { ComponentProps } from 'react' 
import Brand from '@/components/Brand' 

type StoryProps = ComponentProps<typeof Brand>; 

const meta: Meta<StoryProps> = { 
  component: Brand, 
  title: 'Brand', 
  tags: ['autodocs'], 
} satisfies Meta<typeof Brand>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const Long: Story = {};
export const Short: Story = {
  args: {
    variant: 'short'
  }
};
