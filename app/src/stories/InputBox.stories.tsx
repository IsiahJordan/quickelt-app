import type { Meta, StoryObj } from '@storybook/react-vite' 
import { ComponentProps } from 'react' 
import InputBox from '@/components/InputBox' 
import Icon from '@/components/Icon'
import { fn } from 'storybook/test'

type StoryProps = ComponentProps<typeof InputBox>; 

const meta: Meta<StoryProps> = { 
  component: InputBox, 
  title: 'InputBox', 
  tags: ['autodocs'],
  args: {
    leftChild: undefined,
    rightChild: undefined,
    onChange: fn()
  }
} satisfies Meta<typeof InputBox>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const Dark: Story = {
  args: {
    type: "email",
    placeholder: "Enter Email",
    leftChild: <Icon variant="mail"/>,
  }
};

export const Light: Story = {
  args: {
    variant: "light",
    color: "text-alt",
    type: "password",
    placeholder: "Enter Password",
    leftChild: <Icon variant="lock"/>,
    rightChild: <Icon variant="neye"/>
  }
};

