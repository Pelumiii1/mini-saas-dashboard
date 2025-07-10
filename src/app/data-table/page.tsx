'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  status: string;
};

export default function DataTablePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: User[] = await res.json();
        setUsers(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">User Data Table</h1>
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-600 dark:text-gray-300">ID</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 dark:text-gray-300">Name</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 dark:text-gray-300">Email</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 dark:text-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">{user.id}</td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
