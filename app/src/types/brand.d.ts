
export type BrandVariant = 'full' | 'short'; // full logo or icon logo

export interface BrandProps = {
  variant?: BrandVariant;
  style?: string;
};
