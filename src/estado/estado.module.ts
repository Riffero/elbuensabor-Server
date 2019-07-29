import { Module } from '@nestjs/common';
import { EstadoController } from './estado.controller';
import { EstadoService } from './estado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadoSchema } from './schemas/estado.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Estados', schema: EstadoSchema}
  ])],
  controllers: [EstadoController],
  providers: [EstadoService]
})
export class EstadoModule {}
