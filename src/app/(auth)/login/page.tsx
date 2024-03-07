'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserSchema } from '@/utils/zod';
import { FaUserPlus } from 'react-icons/fa';

const LoginPage: React.FC = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badCredential, setBadCredential] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const checkCredentials = () => {
        const result = UserSchema.safeParse({ email, password });
        setBadCredential(!result.success);
        return result.success;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    if (checkCredentials()) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            router.push('/home');
        } else {
            setBadCredential(true);
        }
    }
    };

    return (
        <main className="container mx-auto max-w-md py-8 px-4">
            <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg space-y-6">
                <h1 className="text-center text-gray-700 font-medium text-2xl">Login</h1>
                {badCredential && <p className="text-center text-red-600">Credentials error</p>}
                <div className="px-8 py-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-medium">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={handleUsernameChange}
                        className="border text-gray-700 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-full py-2 px-3 mt-1"
                    />
                </div>
                <div className="px-8 py-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="border text-gray-700 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-full py-2 px-3 mt-1"
                    />
                </div>
                <div className="px-8 py-4">n
                    <button type="submit" className="flex items-center justify-center h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full cursor-pointer">Login</button>
                </div>
                <p className="text-center text-gray-700 text-xl">New Here?</p>
                <button
                    onClick={() => { router.push('/signup') }}
                    className="flex items-center justify-center h-12 bg-blue-600 text-white rounded-sm  hover:bg-blue-700 transition duration-300 ease-in-out w-full cursor-pointer"
                >
                    <FaUserPlus color="white" size="20px" />
                    <span className="text-white">Create your Account</span>
                </button>
            </form>

        </main>
    );
};

export default LoginPage
