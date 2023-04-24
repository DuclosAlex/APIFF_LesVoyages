import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdleCityCharacterController } from './controllers/idle-city-character.controllers';
import { IdleCityCharacterService } from './services/idle-city-character.service';
import { IdleCityCharacterEntity } from './models/idle-city-character.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([IdleCityCharacterEntity])
    ],
    providers: [IdleCityCharacterService],
    controllers: [ IdleCityCharacterController]
})
export class IdleCityCharacterModule {}
