"use client";

import { UserInfo } from "@/_components/user-info-banner";
import { EventsTable } from "@/_components/events-table";
import { Toaster } from "@/_components/ui/toaster";
import { useUserStore } from "@/stores/stores";
import { Card, CardContent } from "@/_components/ui/card";
import { Separator } from "@/_components/ui/separator";

export default function ProfileContent() {
  const { user, events } = useUserStore();

  return (
      <><main className="min-h-screen bg-background py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl space-y-8">
        <Card className="overflow-hidden border-0 sm:border-2">
          <CardContent className="p-0">
            <UserInfo user={user} />
            <Separator />
            <div className="sm:p-4 lg:p-6">
              <h2 className="text-2xl font-semibold mb-4 mt-6">My Tickets</h2>
              <EventsTable events={events} userId={user.id} />
            </div>
          </CardContent>
        </Card>
      </div>
    </main><Toaster /></>

  );
}