import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './models/city.entity';
import { CityService } from './services/city.service';
import { CityController } from './controllers/city.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([CityEntity])
    ],
    providers : [CityService],
    controllers: [CityController]
})
export class CitiesModule {}
