"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/_components/ui/dialog";
import { Button } from "@/_components/ui/button";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import QRCode from "qrcode";

interface QRCodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string;
  eventName: string;
  userId: string;
}

export function QRCodeDialog({
  isOpen,
  onClose,
  eventId,
  eventName,
  userId,
}: QRCodeDialogProps) {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // generating qr
  useEffect(() => {
    if (isOpen && eventId && userId) {
      setIsLoading(true);
      // format participant_id:event_id
      const qrValue = `${userId}:${eventId}`;
      
      QRCode.toDataURL(qrValue, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      })
        .then(url => {
          setQrCode(url);
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Error generating QR code:", err);
          setIsLoading(false);
        });
    } else {
      setQrCode(null);
    }
  }, [isOpen, eventId, userId]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-inherit border-[2.5px] border-gray-200/25">
        <DialogHeader>
          <DialogTitle>Event Check-in QR Code</DialogTitle>
          <DialogDescription>
            Use this QR code for quick check-in at {eventName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center justify-center py-4">
          {isLoading ? (
            <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] flex items-center justify-center border rounded-md">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : qrCode ? (
            <div className="p-3 bg-white rounded-md">
              <img
                src={qrCode}
                alt="Event QR Code"
                className="h-[200px] w-[200px]"
              />
            </div>
          ) : null}
          
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Present this QR code at the event entrance for verification
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}