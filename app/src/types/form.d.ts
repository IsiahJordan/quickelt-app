import React from 'react'

export type FormVariant = 'large' | 'small';

export interface FormProps = {
  variant?: FormVariant;
  labels: Array<string>;
  types: ['email' | 'text' | 'password'];
  topChild?: React.ReactNode;
  bottomChild?: React.ReactNode;
  leftIcons?: Array<React.ReactNode>;
  rightIcons?: Array<React.ReactNode>;
  setter: React.Dispatch<React.SetStateAction<Array<string>>>; // usestate<Array<string>> for input onChange
  style?: string;
};
