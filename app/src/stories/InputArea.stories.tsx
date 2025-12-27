import type { Meta, StoryObj } from '@storybook/react-vite' 
import { fn } from 'storybook/test'
import { ComponentProps } from 'react'
import InputArea from '@/components/InputArea'

type StoryProps = ComponentProps<typeof InputArea>;

const meta: Meta<StoryProps> = {
  component: InputArea,
  title: "Input Area",
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  }
} satisfies Meta<typeof InputArea>;

export default meta;

type Story = StoryObj<StoryProps>; 

export const LightInputArea: Story = {
  args: {
    placeholder: "Enter your description...",
    scale: 1.2,
    maxlength: 300,
    style: ""
  }
};
