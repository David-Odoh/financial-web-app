import React, { useState } from "react";
import * as yup from "yup";
import { Form } from "@/components/shared/form/form";
import InputLabel from "@/components/shared/form/input-label";
import Input from "@/components/shared/form/input";
import { useLocale } from "@/app/shared/locale-context";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  dateOfBirth: yup
    .string()
    .required("Date of Birth is required")
    .test(
      "is-valid-date",
      "Date of Birth must be in the format YYYY-MM-DD",
      (value) => {
        return /^\d{4}-\d{2}-\d{2}$/.test(value || "");
      }
    ),
  presentAddress: yup.string().required("Present Address is required"),
  permanentAddress: yup.string().required("Permanent Address is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal Code is required"),
  country: yup.string().required("Country is required"),
});

export default function EditProfileForm() {
  const [preview, setPreview] = useState<Record<string, any>>({});
  const { t } = useLocale();

  const updatePreview = (field: Partial<typeof preview>) => {
    setPreview((prev) => ({ ...prev, ...field }));
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Form onSubmit={onSubmit} validationSchema={validationSchema}>
      {(methods) => (
        <>
          <div className="mx-auto w-full py-4 lg:px-8 xl:px-10 2xl:px-0">
            <div className="form-row flex flex-col sm:flex-row gap-0 sm:gap-8 w-full">
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.your-name")}
                  important
                />
                <Input
                  type="text"
                  placeholder="Charlene Reed"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("name")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg "
                />
                {methods.formState.errors.name && (
                  <span className="text-red-500">
                    {methods.formState.errors.name.message}
                  </span>
                )}
              </div>
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.user-name")}
                  important
                />
                <Input
                  type="text"
                  placeholder="Charlene Reed"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("username")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.username && (
                  <span className="text-red-500">
                    {methods.formState.errors.username.message}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row flex flex-col sm:flex-row gap-0 sm:gap-8 w-full">
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel title={t("components:settings.email")} important />
                <Input
                  type="email"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  placeholder="charlenereed@gmail.com"
                  {...methods.register("email")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.email && (
                  <span className="text-red-500">
                    {methods.formState.errors.email.message}
                  </span>
                )}
              </div>
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.password")}
                  important
                />
                <Input
                  type="password"
                  placeholder="***********"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("password")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.password && (
                  <span className="text-red-500">
                    {methods.formState.errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row flex flex-col sm:flex-row gap-0 sm:gap-8 w-full">
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.date-of-birth")}
                  important
                />
                <Input
                  type="text"
                  placeholder="25 January 1990"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("dateOfBirth")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.dateOfBirth && (
                  <span className="text-red-500">
                    {methods.formState.errors.dateOfBirth.message}
                  </span>
                )}
              </div>
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.present-address")}
                  important
                />
                <Input
                  type="text"
                  placeholder="San Jose, California, USA"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("presentAddress")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.presentAddress && (
                  <span className="text-red-500">
                    {methods.formState.errors.presentAddress.message}
                  </span>
                )}
              </div>
            </div>

            {/* Repeat for other fields */}
            <div className="form-row flex flex-col sm:flex-row gap-0 sm:gap-8 w-full">
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.permanent-address")}
                  important
                />
                <Input
                  type="text"
                  placeholder="San Jose, California, USA"
                  {...methods.register("permanentAddress")}
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.permanentAddress && (
                  <span className="text-red-500">
                    {methods.formState.errors.permanentAddress.message}
                  </span>
                )}
              </div>
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel title={t("components:settings.city")} important />
                <Input
                  type="text"
                  placeholder="San Jose"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("city")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.city && (
                  <span className="text-red-500">
                    {methods.formState.errors.city.message}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row flex flex-col sm:flex-row gap-0 sm:gap-8 w-full">
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.postal-code")}
                  important
                />
                <Input
                  type="text"
                  placeholder="45962"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("postalCode")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.postalCode && (
                  <span className="text-red-500">
                    {methods.formState.errors.postalCode.message}
                  </span>
                )}
              </div>
              <div className="mb-3 md:mb-5 w-full">
                <InputLabel
                  title={t("components:settings.country")}
                  important
                />
                <Input
                  type="text"
                  placeholder="USA"
                  inputClassName="placeholder:text-[#8BA3CB] bg-transparent max-h-[44px]"
                  {...methods.register("country")}
                  className="border border-[#DFEAF2] dark:border-gray-700 rounded-lg"
                />
                {methods.formState.errors.country && (
                  <span className="text-red-500">
                    {methods.formState.errors.country.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="px-10 py-2 w-full md:w-[150px] mt-4 md:mt-0 text-white bg-[#232323] dark:bg-brand rounded-[10px]"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </Form>
  );
}
