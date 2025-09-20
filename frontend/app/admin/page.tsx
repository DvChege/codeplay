"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [tab, setTab] = useState<"users" | "challenges">("users");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check admin status (JWT)
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error();
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (!payload.is_admin) throw new Error();
    } catch {
      router.push("/");
      return;
    }

    Promise.all([
      apiFetch("/admin/users"),
      apiFetch("/challenges"),
    ]).then(([users, challenges]) => {
      setUsers(users);
      setChallenges(challenges);
      setLoading(false);
    });
  }, [router]);

  if (loading) return <div className="mx-auto mt-12">Loading...</div>;

  return (
    <main className="max-w-4xl mx-auto my-12">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex gap-4 mb-6">
        <button className={`btn ${tab === "users" ? "btn-primary" : ""}`} onClick={() => setTab("users")}>Users</button>
        <button className={`btn ${tab === "challenges" ? "btn-primary" : ""}`} onClick={() => setTab("challenges")}>Challenges</button>
      </div>
      {tab === "users" && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">All Users</h2>
          <table className="table-auto w-full bg-white rounded">
            <thead>
              <tr>
                <th>Username</th><th>Email</th><th>Admin</th><th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: any) => (
                <tr key={u.id}>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.is_admin ? "Yes" : "No"}</td>
                  <td>{new Date(u.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      {tab === "challenges" && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
          <table className="table-auto w-full bg-white rounded">
            <thead>
              <tr>
                <th>Title</th><th>Difficulty</th><th>Language</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((c: any) => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.difficulty}</td>
                  <td>{c.language}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}