import React from 'react'

export type TableCardVariant = 'light' | 'dark';

export interface TableCardProps {
  variant?: TableCardVariant;
  styles: Array<string>;
  onClick: () => void;
  children: Array<React.ReactNode>;
};
