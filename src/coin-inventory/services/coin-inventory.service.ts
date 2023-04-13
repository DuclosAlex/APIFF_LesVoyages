import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoinInventoryEntity } from '../models/coinInventory.entity';
import { Repository } from 'typeorm';
import { CoinInventoryModel } from '../models/coin-inventory.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class CoinInventoryService {
    constructor(
        @InjectRepository(CoinInventoryEntity)
        private readonly coinInventoryRepository: Repository<CoinInventoryEntity>
    ) {}

    createCoinInventory(newCoinInventory: CoinInventoryModel): Observable<CoinInventoryModel> {
        return from(this.coinInventoryRepository.save(newCoinInventory));
    }

    findAllCoinInventory(): Observable<CoinInventoryModel[]> {
        return from(this.coinInventoryRepository.find())
    }
}
