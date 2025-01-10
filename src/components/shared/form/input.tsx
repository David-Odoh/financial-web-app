import { forwardRef } from "react";
import cn from "@/utils/cn";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  useUppercaseLabel?: boolean;
  suffix?: React.ReactNode;
  suffixClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = "text",
      className,
      inputClassName,
      labelClassName,
      suffix,
      suffixClassName,
      useUppercaseLabel = true,
      ...props
    },
    ref
  ) => (
    <div className={cn("text-xs sm:text-sm", className)}>
      <div className={labelClassName}>
        {label && (
          <span
            className={cn(
              "block font-medium tracking-widest dark:text-gray-100",
              useUppercaseLabel ? "mb-2 uppercase sm:mb-3" : "mb-2"
            )}
          >
            {label}

            {props.required && (
              <sup className="inline-block text-[13px]text-red-500 ltr:ml-1 rtl:mr-1">
                *
              </sup>
            )}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "block h-10 w-full rounded-md border-none focus:border-none bg-white px-4 py-2 text-sm placeholder-gray-400 transition-shadow duration-200  dark:text-gray-100 sm:h-12 sm:rounded-lg",
            inputClassName
          )}
        />
        {suffix && (
          <span
            className={cn("whitespace-nowrap leading-normal", suffixClassName)}
          >
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <span role="alert" className="mt-2 block !text-gray-500 sm:mt-2.5">
          {error}
        </span>
      )}
    </div>
  )
);

Input.displayName = "Input";
export default Input;
