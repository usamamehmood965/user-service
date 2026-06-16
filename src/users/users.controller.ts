import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @MessagePattern('get_users')
  @GrpcMethod('UserService', 'FindAll')
  getUsers() {
    const users = this.usersService.getUsers();
    return {
      users: users.map((u) => ({
        ...u,
        id: String(u.id), // proto expects string, your mock data has number
      })),
    };
  }
}
