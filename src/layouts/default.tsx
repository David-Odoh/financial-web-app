import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex overflow-hidden relative h-screen">
      <div>
        <Sidebar />
      </div>

      <main className="md:bg-[#F5F7FA] dark:md:bg-[#0d1321] overflow-x-hidden overflow-y-auto">
        <div>
          <Header />
        </div>
        <div className=" py-6">{children}</div>
      </main>
    </div>
  );
}
