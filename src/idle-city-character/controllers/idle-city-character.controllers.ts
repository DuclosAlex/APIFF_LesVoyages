import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { IdleCityCharacterModel } from '../models/idle-city-character.interface';
import { Observable } from 'rxjs';
import { IdleCityCharacterService } from '../services/idle-city-character.service';

@Controller('idle-city-character')
export class IdleCityCharacterController {
    constructor(private readonly idleCityCharacterService: IdleCityCharacterService) {}

    @Post('create')
    create(@Body() idleCityCharacter: IdleCityCharacterModel): Observable<IdleCityCharacterModel> {
        return this.idleCityCharacterService.create(idleCityCharacter)
    }

    @Get('findAll')
    findAll(): Observable<IdleCityCharacterModel[]> {
        return this.idleCityCharacterService.findAllIdleCityCharacter();
    }
}