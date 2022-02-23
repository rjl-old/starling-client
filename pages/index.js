import { SidebarNavigation } from "../components/SidebarNavigation";

export default function Home() {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <SidebarNavigation />
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">Main content</div>
    </>
  );
}
