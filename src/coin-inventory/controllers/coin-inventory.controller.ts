import { Body, Controller, Post, Get } from '@nestjs/common';
import { CoinInventoryService } from '../services/coin-inventory.service';
import { CoinInventoryModel } from '../models/coin-inventory.interface';
import { Observable } from 'rxjs';

@Controller('coin-inventory')
export class CoinInventoryController {
    constructor(private coinInventoryService: CoinInventoryService) {}

    @Post('create')
    create(@Body() coinInventory: CoinInventoryModel): Observable<CoinInventoryModel> {
        return this.coinInventoryService.createCoinInventory(coinInventory)
    }

    @Get('find')
    findAll(): Observable<CoinInventoryModel[]> {
        return this.coinInventoryService.findAllCoinInventory();
    }
}
