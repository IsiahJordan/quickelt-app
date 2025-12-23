import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ComponentProps } from 'react' 
import Panel from '@/components/Panel'

type StoryProps = ComponentProps<typeof Panel>; 

const meta: Meta<StoryProps> = { 
  component: Panel, 
  title: 'Panel', 
  tags: ['autodocs'], 
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof Panel>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const RightPane: Story = {
  args: {
    title: 'Quiz List',
    list: [
      "Question 1", 
      "Question 2"
    ],
    label: "Finished",
    style: "float-right"
  }
};
