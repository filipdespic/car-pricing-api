import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.usersService.create(body.email, body.password);
    }

    // @Get() 
    // findUser(id: number) {

    // }

    // @Get() 
    // findAllUsers(email: string) {

    // }

    // @Patch() 
    // updateUser(id: number) {

    // }

    // @Delete() 
    // removeUser(id: number) {

    // }

}
