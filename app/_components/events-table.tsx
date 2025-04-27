"use client";

import { Event } from "@/types/types";
import { Button } from "@/_components/ui/button";
import { QrCodeIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Badge } from "@/_components/ui/badge";
import { QRCodeDialog } from "./qr-code-dialog";
import { ScrollArea } from "@/_components/ui/scroll-area";
import { Card } from "@/_components/ui/card";

interface EventsTableProps {
  events: Event[];
  userId: string;
}

export function EventsTable({ events, userId }: EventsTableProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [qrDialogOpen, setQrDialogOpen] = useState(false);

  // function to open qr dialog
  const handleQrCodeClick = (event: Event) => {
    setSelectedEvent(event);
    setQrDialogOpen(true);
  };

  // status color changer
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "upcoming":
        return <Badge className="bg-green-200 text-green-800">Upcoming</Badge>; // Soft blue
      case "completed":
        return <Badge className="bg-yellow-200 text-yellow-800">Completed</Badge>; // Soft gray
      default:
        return null;
    }
  };

  return (
    <>
      <ScrollArea className="h-[600px] md:h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 ? (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              No upcoming events found
            </div>
          ) : (
            events.map((event) => (
              <Card key={event.id} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col border-[2px]">
                <div className="absolute top-0 left-0 w-full h-48 overflow-hidden">
                  <img
                    src={event.posterURL}
                    alt={event.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* badge icon */}
                <div className="relative pt-48 p-6 flex flex-col flex-grow">
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(event.status)}
                  </div>
                  
                  <h3 className="text-xl font-semibold my-4 mb-2 line-clamp-2">{event.name}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>
                        {/* to format like month date, year at hh:mm (am/pm) */}
                        {format(new Date(event.startTime), "PPP")} at {format(new Date(event.startTime), "p")}
                      </span>
                    </div>
                    
                    {event.venue && (
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQrCodeClick(event)}
                      className="gap-2"
                    >
                      <QrCodeIcon className="h-4 w-4" />
                      Show QR Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>

      <QRCodeDialog
        isOpen={qrDialogOpen}
        onClose={() => setQrDialogOpen(false)}
        eventId={selectedEvent?.id || ""}
        eventName={selectedEvent?.name || ""}
        userId={userId}
      />
    </>
  );
}
