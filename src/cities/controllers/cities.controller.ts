import { Controller, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import  { Observable} from 'rxjs'
import { CitiesService } from '../services/cities.service';
import { CityModel } from '../models/cities.interface';

@Controller('cities')
export class CitiesController {
    constructor(private cityService: CitiesService) {}

    @Post('create')
    createCity(@Body() city: CityModel): Observable<CityModel> {
        return this.cityService.create(city);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<CityModel> {
        return this.cityService.findById(id)
    }
}
