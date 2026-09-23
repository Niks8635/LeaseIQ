"use client";

import * as React from "react";
import {
  TreePalm,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/utils";

interface Facility {
  id: number;
  name: string;
  description: string;
  capacity: number;
  charge: number;
  timings: string;
  slots: { time: string; available: boolean }[];
}

export default function FacilitiesPage() {
  const [facilities, setFacilities] = React.useState<Facility[]>([
    {
      id: 1,
      name: "Clubhouse & Banquet Hall",
      description: "Air-conditioned banquet space for parties, meetings, and family gatherings.",
      capacity: 100,
      charge: 2500,
      timings: "09:00 - 22:00",
      slots: [
        { time: "09:00 - 12:00", available: true },
        { time: "14:00 - 17:00", available: false },
        { time: "18:00 - 21:00", available: true },
      ],
    },
    {
      id: 2,
      name: "Swimming Pool",
      description: "Olympic-standard pool with temperature control and certified lifeguards.",
      capacity: 30,
      charge: 0,
      timings: "06:00 - 21:00",
      slots: [
        { time: "06:00 - 08:00", available: true },
        { time: "08:00 - 10:00", available: true },
        { time: "17:00 - 19:00", available: false },
        { time: "19:00 - 21:00", available: true },
      ],
    },
    {
      id: 3,
      name: "Badminton Court",
      description: "Indoor wooden flooring court with professional LED floodlighting.",
      capacity: 4,
      charge: 100,
      timings: "06:00 - 22:00",
      slots: [
        { time: "07:00 - 08:00", available: false },
        { time: "08:00 - 09:00", available: true },
        { time: "18:00 - 19:00", available: true },
        { time: "19:00 - 20:00", available: false },
      ],
    },
    {
      id: 4,
      name: "Fitness Center / Gym",
      description: "Cardio & strength equipment with dedicated personal trainers on request.",
      capacity: 25,
      charge: 0,
      timings: "05:30 - 22:30",
      slots: [
        { time: "Morning Slot", available: true },
        { time: "Evening Slot", available: true },
      ],
    },
  ]);

  const [bookingModal, setBookingModal] = React.useState(false);
  const [selectedFacility, setSelectedFacility] = React.useState<Facility | null>(null);
  const [selectedSlot, setSelectedSlot] = React.useState<string>("");
  const [bookingSuccess, setBookingSuccess] = React.useState(false);

  const handleOpenBooking = (f: Facility) => {
    setSelectedFacility(f);
    setSelectedSlot(f.slots.find((s) => s.available)?.time || "");
    setBookingSuccess(false);
    setBookingModal(true);
  };

  const handleConfirmBooking = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingModal(false);
    }, 1800);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Amenities & Facility Management
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Real-time facility booking calendar, capacity rules, and slot availability.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {facilities.map((fac) => (
          <Card key={fac.id} className="border-border shadow-premium flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-base font-semibold">{fac.name}</CardTitle>
                  <CardDescription className="text-xs mt-1">{fac.description}</CardDescription>
                </div>
                <Badge variant="outline" className="text-xs shrink-0 border-gold/30 text-gold bg-gold/5">
                  {fac.charge === 0 ? "Free for Residents" : formatCurrency(fac.charge)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" /> Max {fac.capacity} guests
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {fac.timings}
                </span>
              </div>

              {/* Slots */}
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Today&apos;s Time Slots</p>
                <div className="grid grid-cols-2 gap-2">
                  {fac.slots.map((s, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg border text-center text-xs transition-colors ${
                        s.available
                          ? "border-border bg-card text-foreground font-medium"
                          : "border-border/30 bg-muted/30 text-muted-foreground line-through opacity-60"
                      }`}
                    >
                      {s.time}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => handleOpenBooking(fac)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs mt-2"
              >
                Book Facility Slot
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Booking Dialog */}
      <Dialog open={bookingModal} onOpenChange={setBookingModal}>
        <DialogContent className="max-w-md border-border bg-popover">
          <DialogHeader>
            <DialogTitle>Book {selectedFacility?.name}</DialogTitle>
            <DialogDescription className="text-xs">
              Select an available time slot for your unit reservation.
            </DialogDescription>
          </DialogHeader>

          {bookingSuccess ? (
            <div className="py-6 text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-base text-foreground">Booking Confirmed!</h3>
              <p className="text-xs text-muted-foreground">
                Reserved for {selectedSlot}. Your booking pass is now active on your resident app.
              </p>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1">
                <p>Booking Fee: <strong>{selectedFacility?.charge === 0 ? "Complimentary" : formatCurrency(selectedFacility?.charge || 0)}</strong></p>
                <p>Rules: No outside amplified sound after 22:00.</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold">Available Slots</label>
                <div className="grid grid-cols-1 gap-2">
                  {selectedFacility?.slots
                    .filter((s) => s.available)
                    .map((s, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSlot(s.time)}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                          selectedSlot === s.time
                            ? "border-gold bg-gold/10 font-bold text-foreground"
                            : "border-border hover:bg-muted"
                        }`}
                      >
                        {s.time}
                      </button>
                    ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="ghost" size="sm" onClick={() => setBookingModal(false)}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleConfirmBooking}
                  disabled={!selectedSlot}
                  className="bg-gold text-primary-foreground hover:bg-gold/90 text-xs"
                >
                  Confirm Reservation
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
