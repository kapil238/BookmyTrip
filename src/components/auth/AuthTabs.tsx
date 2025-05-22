'use client';

import { useRouter } from 'next/navigation';

export default function AuthTabs({ isLogin }: { isLogin: boolean }) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 mb-6 px-4">
      <button
        onClick={() => router.push('/auth/signup')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 ease-in-out shadow-md ${
          !isLogin
            ? 'bg-orange-500 text-white scale-105 hover:bg-orange-600'
            : 'bg-white text-gray-700 hover:text-orange-500 hover:shadow-lg border border-gray-200'
        }`}
      >
        Sign Up
      </button>
      <button
        onClick={() => router.push('/auth/login')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 ease-in-out shadow-md ${
          isLogin
            ? 'bg-orange-500 text-white scale-105 hover:bg-orange-600'
            : 'bg-white text-gray-700 hover:text-orange-500 hover:shadow-lg border border-gray-200'
        }`}
      >
        Log In
      </button>
    </div>
  );
}
