import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { buttonCva, cn } from '@/common/ui';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonCva({ className }))} ref={ref} {...props}>
      Button
    </Comp>
  );
});

Button.displayName = 'Button';

export { Button };
