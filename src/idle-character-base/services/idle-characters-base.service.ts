import { Injectable } from "@nestjs/common";
import { Observable, from } from "rxjs";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IdleCharacterBaseEntity } from "../models/idle-character-base.entity";
import { CreateIdleCharacterBase } from "../models/idle-character-base.interface";

@Injectable()
export class IdleCharacterBaseService {

    constructor(@InjectRepository(IdleCharacterBaseEntity) private readonly idleCharacterBaseRepository: Repository<IdleCharacterBaseEntity>) {}


    createIdleCharacterBase(idleCharacterBase: CreateIdleCharacterBase): Observable<CreateIdleCharacterBase> {
        return from(this.idleCharacterBaseRepository.save(idleCharacterBase))
    }
}