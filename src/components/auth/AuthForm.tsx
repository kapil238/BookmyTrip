'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialButtons from './SocialButtons';
import Input from '../Input';

export default function AuthForm({ isLogin }: { isLogin: boolean }) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        {isLogin ? 'Welcome Back' : 'Begin Your Adventure'}
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Sign {isLogin ? 'in' : 'up'} with Open account
      </p>

      <SocialButtons />
      <div className="text-center mb-4">or</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
            type="text"
          />
        )}

        <Input
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <div className="relative">
          <Input
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={showPassword ? 'text' : 'password'}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-7 cursor-pointer text-gray-600 text-lg"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white scale-105 hover:bg-orange-600 py-2 rounded-lg"
        >
          {isLogin ? 'Log In' : "Let's Start"}
        </button>
      </form>
    </div>
  );
}
