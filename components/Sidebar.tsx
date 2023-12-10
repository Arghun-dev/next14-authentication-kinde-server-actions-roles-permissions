"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ILink {
  path: string;
  name: string;
  requiredPermissions?: string[];
}

const links: ILink[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    requiredPermissions: ["ask:question"],
  },
  {
    path: "/admin",
    name: "Admin Area",
    requiredPermissions: ["delete:question"],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading, getPermissions } =
    useKindeBrowserClient();
  const { permissions } = getPermissions();

  return (
    <div className="absolute left-0 top-0 bg-black h-full p-8">
      <div className="flex flex-col">
        {links.map((link) => {
          if (!link.requiredPermissions && !isAuthenticated) {
            return null;
          }

          return (
            <Link
              href={link.path}
              key={link.path}
              className={`bg-gray-600 mb-8 w-[200px] p-2 rounded-md cursor-pointer hover:bg-gray-500 transition-colors text-gray-200 ${
                link.path === pathname ? "bg-gray-400" : "bg-gray-600"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="absolute bottom-8">
        <div className="flex justify-center">
          <div className="animate-pulse flex justify-center">
            {isLoading && (
              <div className="bg-gray-300 w-[50px] h-[50px] rounded-full" />
            )}
          </div>

          {!isLoading && isAuthenticated && (
            <div className="flex flex-col items-center space-y-4 text-white">
              <div>
                {user?.given_name} {user?.family_name}
              </div>
              <div>{user?.email}</div>
              {user?.picture && (
                <Image
                  src={user.picture}
                  alt="Profile Image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
