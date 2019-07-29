import { Module } from '@nestjs/common';
import { EnvioTipoController } from './envio-tipo.controller';
import { EnvioTipoService } from './envio-tipo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvioTipoSchema } from './schemas/envio-tipo.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'EnviosTipos', schema: EnvioTipoSchema}
  ])],
  controllers: [EnvioTipoController],
  providers: [EnvioTipoService]
})
export class EnvioTipoModule {}
