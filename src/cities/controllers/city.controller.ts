import { Controller, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import  { Observable} from 'rxjs'
import { CityService } from '../services/city.service';
import { CityModel } from '../models/city.interface';

@Controller('city')
export class CityController {
    constructor(private cityService: CityService) {}

    @Post('create')
    createCity(@Body() city: CityModel): Observable<CityModel> {
        return this.cityService.create(city);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<CityModel> {
        return this.cityService.findById(id)
    }
}
