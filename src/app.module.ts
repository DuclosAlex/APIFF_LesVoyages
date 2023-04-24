import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CoinInventoryModule } from './coin-inventory/coin-inventory.module';
import { CitiesModule } from './cities/city.module';
import { IdleCityCharacterModule } from './idle-city-character/idle-city-character.module';


@Module({
  imports : [
    ConfigModule.forRoot({ isGlobal : true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(<string>process.env.DATABASE_PORT),
      username : process.env.DATABASE_USER,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME,
      autoLoadEntities : true,
      synchronize : true,
    }),
    AuthModule,
    CoinInventoryModule,
    CitiesModule,
    IdleCityCharacterModule
  ],
  controllers: [],
  providers: [],
})




export class AppModule {}
