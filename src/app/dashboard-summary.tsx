'use client';

import Link from "next/link";

export default function DashboardSummary() {
  return (
    <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your Dashboard at a Glance</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Quick overview of your key metrics.</p>
      <Link href="/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Full Dashboard
        </button>
      </Link>
    </div>
  );
}
