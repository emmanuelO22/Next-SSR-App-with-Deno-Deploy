import type { Metadata } from "next";
import "./globals.css";
import { logOut } from "../app/logout/actions";
import {  UserCircle } from "lucide-react";
import PrivatePage from "./private/page";


export const metadata: Metadata = {
  title: "Next Js Authentication",
  description: "Authenticate users using Next SSR",
};



function SignOutButton() {
  return (
    <form action={logOut}>
      <button className="text-white bg-blue-600 hover:bg-red-700 px-4 py-2 rounded-full">
        Logout
      </button>
    </form>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className=" p-6">
          <div className=" flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
          LOGROCKET: Next Js Authentication
        </h1>
            <div className="flex gap-3">
              <PrivatePage/>
            <UserCircle className="text-gray-600 mt-1" size={30} />
            <SignOutButton />
            </div>
            
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}