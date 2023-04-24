import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';
import { CityEntity } from '../models/city.entity';
import { CityModel } from '../models/city.interface';

@Injectable()
export class CityService {
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
            }, relations : {
                idleCityCharacters : true
            }
        }))
    }
}
