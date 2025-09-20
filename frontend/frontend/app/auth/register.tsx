"use client";
import { useState } from "react";
import { apiFetch } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const router = useRouter();

  async function handleRegister(e: any) {
    e.preventDefault();
    setErr("");
    try {
      await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });
      router.push("/auth/login");
    } catch (e: any) {
      setErr(e.message);
    }
  }

  return (
    <main className="max-w-md mx-auto mt-16 bg-white rounded-lg p-8 shadow">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        {err && <div className="text-red-600">{err}</div>}
        <button className="btn btn-primary mt-4" type="submit">
          Register
        </button>
      </form>
    </main>
  );
}