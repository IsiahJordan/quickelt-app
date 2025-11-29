import React from 'react'

export type NavBarOrientation = 'normal' | 'reverse';

export interface NavBarProps {
  orientation?: NavBarOrientation;
  color?: string;
  styles?: Array<string>
  children: Array<React.ReactNode>;
};
