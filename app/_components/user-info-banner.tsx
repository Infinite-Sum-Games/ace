"use client";

import { User } from "@/types/types";
// import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import { Badge } from "@/_components/ui/badge";
import { CalendarIcon, BuildingIcon, AtSignIcon } from "lucide-react";
import { format } from "date-fns";

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="relative">
      <div className="relative pt-12 pb-6 px-6 overflow-hidden">

        {/* bg pattern overlay */}
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* animated gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(0, 0%, 70%), hsl(0, 0%, 3.9%))",
            maskImage: "linear-gradient(to right, transparent, blue)",
            WebkitMaskImage: "linear-gradient(to right, transparent, blue)",
          }}
        />

        <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
          <Avatar className="h-24 w-24 border-4 border-border shadow-xl">
            <AvatarImage src={user.avatarUrl} alt={fullName} />
            <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
          </Avatar>

          <div className="space-y-2 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold">{fullName}</h1>
              <Badge
                variant="outline"
                className="w-fit backdrop-blur-sm bg-background/50"
              >
                {user.designation}
              </Badge>
            </div>

            <div className="flex flex-col space-y-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <AtSignIcon className="h-4 w-4" />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <BuildingIcon className="h-4 w-4" />
                <span>{user.organization}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>
                  Joined on {format(new Date(user.createdAt), "MMMM d, yyyy")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
