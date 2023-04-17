import { Injectable } from '@nestjs/common';
import { Observable, from, switchMap, map } from 'rxjs'
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../models/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entities';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) 
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
    ) {}

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: User): Observable<User> {
        const { nickname, password, email } = user;
        
        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    nickname,
                    email,
                    password: hashedPassword
                })).pipe(
                    map((user: User) => {
                        delete user.password;
                        return user;
                    })
                );
            }),
        );
    }


    validateUser(email: string, password: string): Observable<User> {

       return from(this.userRepository.findOne( { 
        where: {
            email: email
       }, relations: {
            coinInventory: true,
            cities: true
       }, select: ["id", "nickname", "email", "password", "role"]})).pipe(
            switchMap((user: User) => 
                from(bcrypt.compare(password, user.password)).pipe(
                    map((isValidPassword: boolean) => {
                        if ( isValidPassword) {
                            delete user.password;
                            return user;
                        }
                    })
                )
            )
       )
    }

    logUser(user: User): Observable<string> {
        const { email, password } = user;
        return this.validateUser( email, password).pipe(
            switchMap((user: User) => {
                if (user) {
                    return from(this.jwtService.signAsync({ user}));
                }
            })
        );
    }
}

