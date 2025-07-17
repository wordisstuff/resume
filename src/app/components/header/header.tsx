'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FcCloseUpMode } from 'react-icons/fc';

export interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Закрити меню при кліку поза ним
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 relative shadow-md text-neutral-600 rounded">
            <Link href={'/'} className="flex items-center space-x-2">
                <FcCloseUpMode className="text-blue-600 text-2xl" />
                <span className="text-lg font-bold text-gray-800">
                    WebBarrel
                </span>
            </Link>
            <div className="hidden md:flex flex-1 justify-center">
                {children}
            </div>
            <div className="relative">
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 p-2 space-y-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span
                        className={`w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                            menuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
                            menuOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                    />
                </button>
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50"
                    >
                        <Link
                            href="/profile"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Profile
                        </Link>
                        <Link
                            href="/settings"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Settings
                        </Link>
                        <Link
                            href="/logout"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Logout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
