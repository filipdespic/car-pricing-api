import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        console.log(body);
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
