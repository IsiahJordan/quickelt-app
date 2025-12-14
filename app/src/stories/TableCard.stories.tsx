import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ComponentProps } from 'react' 
import TableCard from '@/components/TableCard'
import Icon from '@/components/Icon'


type StoryProps = ComponentProps<typeof TableCard>; 

const meta: Meta<StoryProps> = { 
  component: TableCard, 
  title: 'TableCard', 
  tags: ['autodocs'], 
} satisfies Meta<typeof TableCard>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const DarkTableCard: Story = {
  args: {
    styles: [
      'sm:w-24 max-sm:w-12 mt-8 mx-2',
      'max-sm:w-[35vw] sm:w-[40vw] mx-2',
      'max-sm:w-[20vw] sm:flex-1',
    ],
    children: [
      (<Icon variant='image' color='text-default'/>),
      (<h2>Computer Science</h2>),
      (<h2>Isiah Jordan</h2>)
    ]
  }
};

export const LightTableCard: Story = {
  args: {
    variant: 'light',
    styles: [
      'max-sm:w-[35vw] sm:flex-1 ml-1',
      'max-sm:w-[35vw] sm:w-[40vw]',
      'sm:w-24 max-sm:w-12 flex flex-row-reverse',
    ],
    children: [
      (<h2>Computer Science</h2>),
      (<h2>Isiah Jordan</h2>),
      (<Icon variant='like' color='text-extra'/>)
    ]
  }
};
