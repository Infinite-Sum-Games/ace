import { User, Event } from "@/types/types";

import { create } from "zustand";

// Mock data
const mockUser: User = {
  id: "usr_123456",
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@gmail.com",
  organization: "Tech Company Inc",
  designation: "Student",
  createdAt: "2023-01-15T08:30:00Z",
};

const mockEvents: Event[] = [
  {
    id: "evt_001",
    name: "Annual Tech Conference 2025",
    startTime: "2025-07-15T09:00:00Z",
    endTime: "2025-07-15T17:00:00Z",
    venue: "Grand Tech Center, San Francisco",
    status: "Upcoming",
    description: "The largest tech gathering in the Bay Area",
    posterURL: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
  },
  {
    id: "evt_002",
    name: "React Advanced Workshop",
    startTime: "2025-08-22T10:00:00Z",
    endTime: "2025-08-22T16:00:00Z",
    venue: "Online (Zoom)",
    status: "Upcoming",
    description: "Deep dive into advanced React patterns and techniques",
    posterURL: "https://images.pexels.com/photos/7375/startup-photos.jpg"
  },
  {
    id: "evt_003",
    name: "Product Design Summit",
    startTime: "2025-09-05T13:00:00Z",
    endTime: "2025-09-05T18:00:00Z",
    venue: "Design Hub, New York",
    status: "Upcoming",
    description: "Exploring the future of product design",
    posterURL: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  {
    id: "evt_004",
    name: "AI in Healthcare Symposium",
    startTime: "2025-10-10T08:30:00Z",
    endTime: "2025-10-11T17:00:00Z",
    venue: "Darkest Room in History",
    status: "Completed",
    posterURL: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
  },
  {
    id: "evt_001",
    name: "Annual Tech Conference 2025",
    startTime: "2025-07-15T09:00:00Z",
    endTime: "2025-07-15T17:00:00Z",
    venue: "Grand Tech Center, San Francisco",
    status: "Upcoming",
    description: "The largest tech gathering in the Bay Area",
    posterURL: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
  },
  {
    id: "evt_002",
    name: "React Advanced Workshop",
    startTime: "2025-08-22T10:00:00Z",
    endTime: "2025-08-22T16:00:00Z",
    venue: "Online (Zoom)",
    status: "Upcoming",
    description: "Deep dive into advanced React patterns and techniques",
    posterURL: "https://images.pexels.com/photos/7375/startup-photos.jpg"
  },
  {
    id: "evt_003",
    name: "Product Design Summit",
    startTime: "2025-09-05T13:00:00Z",
    endTime: "2025-09-05T18:00:00Z",
    venue: "Design Hub, New York",
    status: "Upcoming",
    description: "Exploring the future of product design",
    posterURL: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  {
    id: "evt_004",
    name: "AI in Healthcare Symposium",
    startTime: "2025-10-10T08:30:00Z",
    endTime: "2025-10-11T17:00:00Z",
    venue: "Darkest Room in History",
    status: "Completed",
    posterURL: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
  }
];

interface UserStore {
  user: User;
  events: Event[];
  // just to update user state in a nice way. might remove later
  updateUser: (user: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: mockUser,
  events: mockEvents,
  updateUser: (updatedUser) => 
    set((state) => ({ user: { ...state.user, ...updatedUser } })),
}));