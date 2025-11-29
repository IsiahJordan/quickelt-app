import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ComponentProps } from 'react' 
import NavBar from '@/components/NavBar'
import Icon from '@/components/Icon'
import Brand from '@/components/Brand'
import Button from '@/components/Button'

type StoryProps = ComponentProps<typeof NavBar>; 

const meta: Meta<StoryProps> = { 
  component: NavBar, 
  title: 'NavBar', 
  tags: ['autodocs'], 
} satisfies Meta<typeof NavBar>; 

export default meta; 

type Story = StoryObj<StoryProps>; 


export const MobileNavbar: Story = {
  args: {
    variant: 'small',
    children: [
      <Icon variant='nav'/>
    ]
  }
};

export const ExitMobileNavbar: Story = {
  args: {
    variant: 'small',
    orientation: 'reverse',
    bgColor: 'bg-background-alt',
    children: [
      <Icon variant='exit' color='text-alt'/>
    ]
  }
};

export const DesktopNavbar: Story = {
  args: {
    styles: ['flex-0.5', 'flex-0.5', 'flex-3', 'flex-1'],
    children: [
      <Icon variant='nav'/>,
      <h4 className='text-default mb-1 mx-2'>Menu</h4>,
      <div className='justify-center'>
        <Brand variant='short' style='w-[60px]'/>
      </div>,
      <Button variant='accent' label='LOGOUT' color='text-default' onClick={fn()}/>
    ]
  }
};
