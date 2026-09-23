"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, KeyRound, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    email: 'admin@leaseiq.in',
    password: 'password123',
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFillDemo = (email: string, pass: string) => {
    setFormData({ email, password: pass });
    setErrors({ email: '', password: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setIsSuccess(true);
    
    // Immediate and reliable redirect to dashboard
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard';
    } else {
      router.push('/dashboard');
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-5 text-center p-8 rounded-3xl bg-[#0A1B30]/90 border border-[rgba(0,245,212,0.25)] shadow-2xl backdrop-blur-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00F5D4]/15 border border-[#00F5D4]/30 shadow-[0_0_20px_rgba(0,245,212,0.3)]">
          <Loader2 className="h-8 w-8 text-[#00F5D4] animate-spin" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Opening Dashboard...</h2>
          <p className="text-xs text-[#7E97B8] mt-1">Authenticated as {formData.email}</p>
        </div>
        <p className="text-xs text-white/70">Redirecting to your executive command center. If you are not redirected automatically:</p>
        <Button asChild className="btn-cyan font-bold w-full rounded-xl py-2.5 shadow-[0_0_20px_rgba(0,245,212,0.3)]">
          <Link href="/dashboard" className="flex items-center justify-center gap-2">
            Click here to Open Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col space-y-2 text-center lg:text-left">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-white">Welcome back</h1>
        <p className="text-[#7E97B8]">Log in to your LeaseIQ account</p>
      </div>

      {/* Quick Demo Credentials Card */}
      <div className="mb-6 rounded-2xl border border-[rgba(0,245,212,0.2)] bg-[#0A1B30]/90 p-4 text-xs shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-1.5 font-semibold text-[#00F5D4] mb-2.5">
          <KeyRound className="h-3.5 w-3.5" />
          <span>Demo Credentials (Click to auto-fill)</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleFillDemo('admin@leaseiq.in', 'password123')}
            className={cn(
              "rounded-xl border p-2 text-left transition-all",
              formData.email === 'admin@leaseiq.in'
                ? "border-[#00F5D4] bg-[rgba(0,245,212,0.12)] text-white shadow-[0_0_10px_rgba(0,245,212,0.2)]"
                : "border-[rgba(0,245,212,0.15)] bg-[#040D1A]/80 text-[#7E97B8] hover:border-[#00F5D4]/50"
            )}
          >
            <p className="font-semibold text-white">Admin</p>
            <p className="text-[10px] truncate text-[#7E97B8]">admin@leaseiq.in</p>
          </button>

          <button
            type="button"
            onClick={() => handleFillDemo('treasurer@leaseiq.in', 'password123')}
            className={cn(
              "rounded-xl border p-2 text-left transition-all",
              formData.email === 'treasurer@leaseiq.in'
                ? "border-[#00F5D4] bg-[rgba(0,245,212,0.12)] text-white shadow-[0_0_10px_rgba(0,245,212,0.2)]"
                : "border-[rgba(0,245,212,0.15)] bg-[#040D1A]/80 text-[#7E97B8] hover:border-[#00F5D4]/50"
            )}
          >
            <p className="font-semibold text-white">Treasurer</p>
            <p className="text-[10px] truncate text-[#7E97B8]">treasurer@leaseiq.in</p>
          </button>

          <button
            type="button"
            onClick={() => handleFillDemo('resident@leaseiq.in', 'password123')}
            className={cn(
              "rounded-xl border p-2 text-left transition-all",
              formData.email === 'resident@leaseiq.in'
                ? "border-[#00F5D4] bg-[rgba(0,245,212,0.12)] text-white shadow-[0_0_10px_rgba(0,245,212,0.2)]"
                : "border-[rgba(0,245,212,0.15)] bg-[#040D1A]/80 text-[#7E97B8] hover:border-[#00F5D4]/50"
            )}
          >
            <p className="font-semibold text-white">Resident</p>
            <p className="text-[10px] truncate text-[#7E97B8]">resident@leaseiq.in</p>
          </button>
        </div>
        <p className="mt-2.5 text-[11px] text-[#7E97B8]">
          Demo password: <code className="rounded bg-[#040D1A] px-1.5 py-0.5 text-[#00F5D4] font-mono">password123</code>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-[#7E97B8]" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={cn("pl-10 bg-[#061220] border-[rgba(0,245,212,0.18)] text-white placeholder:text-[#7E97B8]/50 focus:border-[#00F5D4]", errors.email && "border-destructive")}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Link href="#" className="text-sm font-medium text-[#00F5D4] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-[#7E97B8]" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={cn("pl-10 pr-10 bg-[#061220] border-[rgba(0,245,212,0.18)] text-white placeholder:text-[#7E97B8]/50 focus:border-[#00F5D4]", errors.password && "border-destructive")}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-[#7E97B8] hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
          </div>
        </div>

        <Button type="submit" className="w-full btn-cyan font-bold py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,245,212,0.3)]" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            <>
              Log in to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full border-[rgba(0,245,212,0.15)]" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#040D1A] px-2 text-[#7E97B8]">or</span>
        </div>
      </div>

      <div className="text-center text-sm text-[#7E97B8]">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-[#00F5D4] hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
}
