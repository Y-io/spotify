import { cva } from 'class-variance-authority';

export const buttonCva = cva(
  {},
  {
    variants: {
      type: {
        button: [],
        icon: [],
      },
      size: {
        sm: [],
        md: [],
      },
    },
    compoundVariants: [
      {
        type: 'button',
        size: 'sm',
      },
      {
        type: 'icon',
        size: 'md',
      },
    ],
    defaultVariants: {
      size: 'sm',
    },
  },
);
