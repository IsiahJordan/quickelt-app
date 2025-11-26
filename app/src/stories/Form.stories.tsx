import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ComponentProps } from 'react' 
import Icon from '@/components/Icon'
import Form from '@/components/Form' 
import Brand from '@/components/Brand'
import Button from '@/components/Button'

type StoryProps = ComponentProps<typeof Form>; 

const meta: Meta<StoryProps> = { 
  component: Form, 
  title: 'Form', 
  tags: ['autodocs'], 
  args: {
    setter: fn(),
    onSubmit: fn()
  }
} satisfies Meta<typeof Form>; 

export default meta; 

type Story = StoryObj<StoryProps>; 

export const SignIn: Story = {
  args: {
    labels: ["Email", "Password"],
    types: ["email", "password"],
    topChild: (
      <>
        <Brand variant="full"/> 
        <div className="text-default text-[24px]">
          Create your account
        </div>
      </>
    ),
    bottomChild: {
      <>
        <Button
          variant="primary"
          label="SIGN IN"
          onClick={fn()}
        /> 
        <Button
          variant="secondary"
          label="CREATE ACCOUNT"
          onClick={fn()}
        /> 
      </>
    },
    leftIcons: [<Icon variant="mail"/>, <Icon variant="lock"/>],
    rightIcons: [undefined, <Icon variant="neye"/>]
  }
};
