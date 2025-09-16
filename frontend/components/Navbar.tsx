"use client";
import Link from "next/link";

export default function Navbar() {
  let isAdmin = false;
  if (typeof window !== "undefined") {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        isAdmin = payload.is_admin;
      }
    } catch {}
  }
  return (
    <nav>
      {/* ...other links... */}
      {isAdmin && (
        <Link href="/admin" className="ml-4 font-bold text-red-600">
          Admin
        </Link>
      )}
    </nav>
  );
}