"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Users, CheckCircle, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { cn } from '@/lib/utils';

export default function BookDemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    societyName: '',
    email: '',
    phone: '',
    units: '',
    city: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.societyName.trim()) {
      newErrors.societyName = 'Society name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!formData.units) {
      newErrors.units = 'Please select the number of units';
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden bg-background">
      {/* Ambient Looping Twilight Skyline Drone Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="nightscape" variant="light" overlayOpacity={0.62} showControls={false} />

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left Column: Value Props */}
        <div className="space-y-8">
          <div>
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-primary">
              Book a Demo
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-lg">
              See how LeaseIQ can transform your society operations. Our team will walk you through the platform and answer any questions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">30-minute personalized walkthrough</h3>
                <p className="text-muted-foreground mt-1 text-sm">Tailored to your society&apos;s exact flat count, wings, and gate layout.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Meet with our PropTech architects</h3>
                <p className="text-muted-foreground mt-1 text-sm">Get direct guidance on historical Tally data migration and bank nodal feeds.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Complete committee presentation kit</h3>
                <p className="text-muted-foreground mt-1 text-sm">Receive custom comparison slides for your upcoming AGM or committee review.</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card with Floating Media Badges */}
          <div className="relative rounded-3xl overflow-hidden border border-border/70 bg-card shadow-premium mt-8 group">
            <div className="relative h-56 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">Live Demonstration</span>
                <h4 className="font-serif text-lg font-semibold">LeaseIQ Societies Command Center</h4>
                <p className="text-xs text-white/70">450+ Active Housing Societies Across India</p>
              </div>
            </div>

            {/* Embedded Mini Stat Row */}
            <div className="p-4 grid grid-cols-3 gap-2 text-center bg-surface border-t border-border/50 text-xs">
              <div>
                <p className="font-serif font-bold text-sm text-foreground">0.8s</p>
                <p className="text-[10px] text-muted-foreground">ANPR Lift</p>
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-gold">98.8%</p>
                <p className="text-[10px] text-muted-foreground">UPI Match</p>
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-foreground">99.9%</p>
                <p className="text-[10px] text-muted-foreground">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <Card className="shadow-premium border-muted bg-card">
            {isSuccess ? (
              <CardContent className="flex flex-col items-center justify-center space-y-6 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-10 w-10 text-success" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-bold">Demo Request Submitted!</h2>
                  <p className="text-muted-foreground">
                    Thank you for your interest in LeaseIQ. Our team will reach out within 24 hours to schedule your demo.
                  </p>
                </div>
                <Button asChild className="mt-4" size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Request your demo</CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll be in touch shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          className={cn(errors.name && "border-destructive")}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="societyName">Society / Community Name</Label>
                        <Input
                          id="societyName"
                          placeholder="Society Name"
                          className={cn(errors.societyName && "border-destructive")}
                          value={formData.societyName}
                          onChange={(e) => setFormData({ ...formData, societyName: e.target.value })}
                        />
                        {errors.societyName && <p className="text-sm text-destructive">{errors.societyName}</p>}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className={cn(errors.email && "border-destructive")}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="1234567890"
                          className={cn(errors.phone && "border-destructive")}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="units">Number of Units</Label>
                        <Select
                          value={formData.units}
                          onValueChange={(value) => setFormData({ ...formData, units: value ?? "" })}
                        >
                          <SelectTrigger className={cn(errors.units && "border-destructive")}>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50">Under 50</SelectItem>
                            <SelectItem value="50-100">50 - 100</SelectItem>
                            <SelectItem value="100-300">100 - 300</SelectItem>
                            <SelectItem value="300-500">300 - 500</SelectItem>
                            <SelectItem value="500+">500+</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.units && <p className="text-sm text-destructive">{errors.units}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Your City"
                          className={cn(errors.city && "border-destructive")}
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                        {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about any specific challenges you're facing..."
                        className="min-h-[100px] resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          Request Demo
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
