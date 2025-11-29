
export type BadgeVariant = 'active' | 'inactive';

export interface BadgeProps {
  variant?: BadgeVariant;
  label: string;
};
