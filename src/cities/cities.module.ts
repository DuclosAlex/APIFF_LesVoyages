import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './models/cities.entity';
import { CitiesService } from './services/cities.service';
import { CitiesController } from './controllers/cities.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([CityEntity])
    ],
    providers : [CitiesService],
    controllers: [CitiesController]
})
export class CitiesModule {}
