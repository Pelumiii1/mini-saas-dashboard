'use client';

import { useState } from 'react';
import Header from "./header";
import Sidebar from "./sidebar";
import ThemeInitializer from "./theme-initializer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <ThemeInitializer />
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </>
  );
}
