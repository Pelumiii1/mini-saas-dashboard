'use client';

import { SignedIn, SignedOut } from "@clerk/nextjs";
import React, { Suspense } from 'react';

const DashboardSummary = React.lazy(() => import('./dashboard-summary'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <SignedIn>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome!</h2>
            <Suspense fallback={<div className="text-gray-900 dark:text-white">Loading dashboard summary...</div>}>
              <DashboardSummary />
            </Suspense>
          </SignedIn>
          <SignedOut>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to My App</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">Please sign in to view the dashboard.</p>
          </SignedOut>
        </div>
      </main>
    </div>
  );
}
