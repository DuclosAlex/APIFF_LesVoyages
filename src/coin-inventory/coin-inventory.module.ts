import { Module } from '@nestjs/common';
import { CoinInventoryService } from './services/coin-inventory.service';
import { CoinInventoryController } from './controllers/coin-inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoinInventoryEntity } from './models/coin-inventory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoinInventoryEntity])
  ],
  providers: [CoinInventoryService],
  controllers: [CoinInventoryController]
})
export class CoinInventoryModule {}
