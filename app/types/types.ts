export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
    designation: string;
    createdAt: string;
    avatarUrl?: string;
  }
  
  export interface Event {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    venue?: string;
    status: 'Completed' | 'Upcoming';
    description?: string;
    posterURL?: string
  }