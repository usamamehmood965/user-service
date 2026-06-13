import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1-555-123-4567',
        role: 'Admin',
        isActive: true,
        createdAt: '2026-06-01T10:30:00Z',
      },
      {
        id: 2,
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@example.com',
        phone: '+1-555-234-5678',
        role: 'Manager',
        isActive: true,
        createdAt: '2026-06-02T14:15:00Z',
      },
      {
        id: 3,
        firstName: 'Michael',
        lastName: 'Brown',
        email: 'michael.brown@example.com',
        phone: '+1-555-345-6789',
        role: 'Developer',
        isActive: true,
        createdAt: '2026-06-03T09:45:00Z',
      },
      {
        id: 4,
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily.davis@example.com',
        phone: '+1-555-456-7890',
        role: 'Designer',
        isActive: false,
        createdAt: '2026-06-04T16:20:00Z',
      },
      {
        id: 5,
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.wilson@example.com',
        phone: '+1-555-567-8901',
        role: 'User',
        isActive: true,
        createdAt: '2026-06-05T11:10:00Z',
      },
    ];
  }
}
