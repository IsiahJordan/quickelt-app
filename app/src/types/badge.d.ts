
export type BadgeVariant = 'active' | 'inactive';

export interface BadgeProps {
  variant?: BadgeVariant;
  onClick: () => void;
  label: string;
};
