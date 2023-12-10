import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Admin() {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  const requiredPermission = await getPermission("delete:question");
  if (!requiredPermission?.isGranted) {
    redirect("/dashboard");
  }

  return (
    <div>
      <div className="mb-8">Admin Area</div>
      <LogoutLink className="bg-gray-300 p-2 rounded-md">Sign out</LogoutLink>
    </div>
  );
}
