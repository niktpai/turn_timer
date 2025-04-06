"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, onCheckedChange, checked, ...props }, ref) => {
  // Track state internally to ensure visual updates
  const [isChecked, setIsChecked] = React.useState(checked);
  
  // Update internal state when prop changes
  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  // Add debug logging
  const handleCheckedChange = (newChecked: boolean) => {
    console.log("Switch clicked:", { 
      prevChecked: isChecked,
      newChecked, 
      eventReceived: true,
      element: props.id || 'unknown'
    });
    
    // Update internal state immediately for visual feedback
    setIsChecked(newChecked);
    
    // Call the original handler if provided
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  // Direct click handler as a backup
  const handleManualClick = (e: React.MouseEvent) => {
    console.log("Direct switch click", { 
      current: isChecked, 
      target: e.target,
      currentTarget: e.currentTarget
    });
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onCheckedChange) {
      onCheckedChange(newValue);
    }
  };

  React.useEffect(() => {
    console.log("Switch rendered:", {
      id: props.id || 'unknown',
      checked: isChecked
    });
  }, [props.id, isChecked]);

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        "transition-all duration-300 ease-in-out relative",
        { "bg-green-500": isChecked, "bg-gray-300": !isChecked },
        className
      )}
      checked={isChecked}
      onCheckedChange={handleCheckedChange}
      onClick={handleManualClick}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          "transition-all duration-300 ease-in-out scale-90 data-[state=checked]:scale-100 absolute",
          { "translate-x-4": isChecked, "translate-x-0": !isChecked }
        )}
      />
    </SwitchPrimitives.Root>
  );
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
