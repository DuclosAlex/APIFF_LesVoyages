import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';
import { CityEntity } from '../models/cities.entity';
import { CityModel } from '../models/cities.interface';

@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
    ) {}

    create(city: CityModel): Observable<CityModel> {
        return from(this.cityRepository.save(city))
    }

    findById(id: number): Observable<CityModel> {
        return from(this.cityRepository.findOne( {
            where : {
                id: id
            }
        }))
    }
}
