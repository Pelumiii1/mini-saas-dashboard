'use client';

import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <button className="lg:hidden text-gray-500 dark:text-gray-400 focus:outline-none" onClick={toggleSidebar}>
        <HiMenu className="h-6 w-6" />
      </button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My App</h1>
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
