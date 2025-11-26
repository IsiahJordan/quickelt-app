import type { Meta, StoryObj } from '@storybook/react-vite' 
import { ComponentProps } from 'react' 
import InputBox from '@/components/InputBox' 
import { IoMdMail } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
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

export default meta; type Story = StoryObj<StoryProps>; 

export const Dark: Story = {
  args: {
    type: "email",
    placeholder: "Enter Email",
    leftChild: <IoMdMail size={28} color="#ffffff" opacity="90%"/>,
  }
};

export const Light: Story = {
  args: {
    variant: "light",
    color: "text-alt",
    type: "password",
    placeholder: "Enter Password",
    leftChild: <FaLock size={22}/>,
    rightChild: <FaRegEyeSlash size={28}/>
  }
};
