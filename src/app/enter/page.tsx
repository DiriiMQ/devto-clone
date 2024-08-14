'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Enter = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 bg-white w-full max-w-md flex flex-col items-center">
        <Image src="/dev-logo.png" alt="DEV" width={60} height={50} />
        <h1 className="text-2xl font-bold text-center mb-6 mt-5">Join the DEV Community</h1>
        <p className="text-center text-gray-600 mb-6">
          DEV Community is a community of 1,903,097 amazing developers
        </p>
        <button
          onClick={() => signIn('github', { callbackUrl: '/' })}
          className="w-full py-2 px-4 border border-gray-300 bg-white text-gray-800 rounded-md hover:bg-gray-200 transition duration-300"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Enter;