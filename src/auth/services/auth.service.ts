import { Injectable } from '@nestjs/common';
import { Observable, from, switchMap, map } from 'rxjs'
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUser } from '../models/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entities';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {

    }

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: CreateUser): Observable<CreateUser> {
        const { nickname, password, email } = user;
        
        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    nickname,
                    email,
                    password: hashedPassword
                })).pipe(
                    map((user: CreateUser) => {
                        delete user.password;
                        return user;
                    })
                );
            }),
        );
    }
}

