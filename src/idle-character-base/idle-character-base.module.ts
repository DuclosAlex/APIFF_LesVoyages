import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IdleCharacterBaseEntity } from "./models/idle-character-base.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([IdleCharacterBaseEntity])
    ],
    providers: [],
    controllers: [],
})
export class IdleCharacterBaseModule {}