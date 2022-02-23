import { SidebarNavigation } from "./SidebarNavigation";

export const Layout = ({ children }) => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <SidebarNavigation />
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className={"flex-1"}>
          <div className={"px-4 py-6"}>{children}</div>
        </main>
      </div>
    </>
  );
};
