import React from "react";
import {
  useForm,
  type SubmitHandler,
  UseFormReturn,
  UseFormProps,
  FieldValues,
  Resolver,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ObjectSchema, AnyObject } from "yup";

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode; // Ensure it returns ReactNode
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: ObjectSchema<TFormValues & AnyObject>;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  ...formProps
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...useFormProps,
    resolver: validationSchema
      ? (yupResolver(validationSchema) as unknown as Resolver<TFormValues>)
      : undefined,
  });

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      noValidate
      {...formProps}
      className="space-y-4"
    >
      {children(methods)} {/* Ensure this is returning valid ReactNode */}
    </form>
  );
};
