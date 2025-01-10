import DefaultLayout from "@/layouts/default";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
