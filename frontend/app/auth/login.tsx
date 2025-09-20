"use client";
import { useState } from "react";
import { apiFetch } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function handleLogin(e: any) {
    e.preventDefault();
    setErr("");
    try {
      const { token } = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } catch (e: any) {
      setErr(e.message);
    }
  }

  return (
    <main className="max-w-md mx-auto mt-16 bg-white rounded-lg p-8 shadow">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {err && <div className="text-red-600">{err}</div>}
        <button className="btn btn-primary mt-4" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}