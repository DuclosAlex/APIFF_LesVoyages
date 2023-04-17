import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IdleCharacterBaseEntity } from "./models/idle-character-base.entity";
import { IdleCharactersBaseController } from "./controllers/idle-characters-base.controller";
import { IdleCharactersBaseService } from "./services/idle-characters-base.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([IdleCharacterBaseEntity])
    ],
    providers: [IdleCharactersBaseService],
    controllers: [IdleCharactersBaseController],
})
export class IdleCharacterBaseModule {}