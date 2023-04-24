import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdleCityCharacterEntity } from '../models/idle-city-character.entity';
import { Repository } from 'typeorm';
import { IdleCityCharacterModel } from '../models/idle-city-character.interface';
import { Observable, from } from  'rxjs';

@Injectable() 
export class IdleCityCharacterService {
    constructor(
        @InjectRepository(IdleCityCharacterEntity)
        private readonly idleCityCharacterRepository: Repository<IdleCityCharacterEntity> 
    ) {}

    create(newIdleCityCharacter: IdleCityCharacterModel): Observable<IdleCityCharacterModel> {
        return from(this.idleCityCharacterRepository.save(newIdleCityCharacter));
    }

    findAllIdleCityCharacter(): Observable<IdleCityCharacterModel[]> {
        return from(this.idleCityCharacterRepository.find());
    }
}