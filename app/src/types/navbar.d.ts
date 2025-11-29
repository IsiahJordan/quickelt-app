import React from 'react'

export type NavBarVariant = 'large' | 'small';
export type NavBarOrientation = 'normal' | 'reverse';

export interface NavBarProps {
  variant?: NavBarVariant;
  orientation?: NavBarOrientation;
  color?: string;
  styles?: Array<string>
  children: Array<React.ReactNode>;
};
