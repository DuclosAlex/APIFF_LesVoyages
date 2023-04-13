import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from '../models/user.interface';
import { Observable } from 'rxjs';
import { UserEntity } from '../models/user.entities';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register') 
    register(@Body() user: CreateUser): Observable<CreateUser> {
        return this.authService.registerAccount(user);
    }
}
