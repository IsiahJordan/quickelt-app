import React from 'react'

export type InputVariant = 'dark' | 'light' | 'outline';

export interface InputProps {
  variant?: InputVariant;
  type?: string;
  color?: string;
  placeholder: string;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  style?: string;
  onChange: (text: string) => void;
};
