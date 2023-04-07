import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { UserEntity } from '../models/user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../models/user.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    createUser(newUser: UserModel): Observable<UserModel> {
        return from(this.userRepository.save(newUser));
    }

    findAllUsers(): Observable<UserModel[]> {
        return from(this.userRepository.find())
    }

    updateUser(id: number, userUpdate: UserModel): Observable<UpdateResult> {
        return from(this.userRepository.update(id, userUpdate));
    }

    deleteUser(id: number): Observable<DeleteResult> {
        return from(this.userRepository.delete(id));
    }
}
