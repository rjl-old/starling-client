import {
  CogIcon,
  HomeIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Payments",
    href: "/payments",
    icon: SwitchHorizontalIcon,
    current: false,
  },
  {
    name: "Account Details",
    href: "/account_details",
    icon: CogIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: CogIcon,
    current: false,
  },
];

export const SidebarNavigation = () => {
  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-purple-900 text-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 px-4">
          <p className={"text-xl font-bold"}>Starling client</p>
        </div>
        {/* Navigation */}
        <nav className={"flex-1 mt-5 px-2"}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={classNames(
                  item.current
                    ? "bg-purple-100 text-purple-900"
                    : "text-purple-300 hover:bg-purple-50 hover:text-purple-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-purple-500"
                      : "text-purple-400 group-hover:text-purple-500",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                />
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
