"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, LayoutDashboard, Sparkles, Shield, Zap } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const features = [
    {
      icon: Sparkles,
      title: 'Modern Design',
      description: 'Beautiful modal-based interface with smooth animations',
    },
    {
      icon: Shield,
      title: 'Secure Auth',
      description: 'Protected routes with secure authentication flow',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed with Next.js 15 and React',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Welcome to Your App
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience a modern authentication system with beautiful modal designs. 
            Get started by signing in or creating a new account.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg gap-2"
              onClick={() => router.push('/login')}
            >
              <LogIn className="h-5 w-5" />
              Sign In
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg gap-2"
              onClick={() => router.push('/register')}
            >
              <UserPlus className="h-5 w-5" />
              Create Account
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl hover:shadow-xl transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Demo Card */}
        <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Ready to get started?</CardTitle>
            <CardDescription className="text-base">
              Create an account or sign in to access your personalized dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full h-12 text-base" 
              onClick={() => router.push('/login')}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign in to Dashboard
            </Button>
            <Button 
              className="w-full h-12 text-base" 
              variant="secondary"
              onClick={() => router.push('/register')}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Create New Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}