import useCheckUser from '@/hooks/useCheckUser';
import React from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Settings, Users, Menu, X } from "lucide-react";

const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "users", name: "Users", icon: Users },
    { id: "settings", name: "Settings", icon: Settings },
];

export default function Admin() {
    useCheckUser();

    function Dashboard() {
        return <div className="text-2xl">Welcome to the Dashboard</div>;
    }

    function UsersPage() {
        return <div className="text-2xl">Manage Users Here</div>;
    }

    function SettingsPage() {
        return <div className="text-2xl">Settings Page</div>;
    }

    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen flex-col md:flex-row relative">
            {/* Mobile Sidebar Toggle */}
            <div className="md:hidden p-4 flex justify-between items-center bg-gray-900 text-white">
                <h1 className="text-xl font-bold ">Admin Panel</h1>
                <Button variant="ghost" className="relative z-[60]" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>

            {/* Sidebar */}
            <div className={cn(
                "bg-gray-900 text-white p-5 flex flex-col space-y-5 md:w-64 md:block fixed md:relative top-0 left-0 h-full transition-transform duration-300 ease-in-out",
                sidebarOpen ? "w-full h-full z-50" : "-translate-x-full md:translate-x-0"
            )}>
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                        <Button
                            key={item.id}
                            onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                            variant="ghost"
                            className={`flex items-center gap-3 px-4 py-2 w-full ${"md:justify-start"} ${activeTab === item.id && "bg-gray-700"}`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:ml-64 transition-all duration-300 ease-in-out">
                {activeTab === "dashboard" && <Dashboard />}
                {activeTab === "users" && <UsersPage />}
                {activeTab === "settings" && <SettingsPage />}
            </div>
        </div>
    );
}
