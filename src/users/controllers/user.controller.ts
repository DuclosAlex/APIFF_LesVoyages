import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserModel } from '../models/user.interface';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() user: UserModel): Observable<UserModel> {
        return this.userService.createUser(user)
    }

    @Get()
    findAll(): Observable<UserModel[]> {
        return this.userService.findAllUsers();
    }

    @Put(':id')
    updateUser(
        @Param('id') id: number,
        @Body() userUpdate: UserModel
    ): Observable<UpdateResult> {
        return  this.userService.updateUser(id, userUpdate)
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id: number
    ): Observable<DeleteResult> {
        return this.userService.deleteUser(id);
    }

}
