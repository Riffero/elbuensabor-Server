import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InsumoController } from './insumo.controller';
import { InsumoService } from './insumo.service';
import { InsumoSchema } from './schemas/insumo.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Insumos', schema: InsumoSchema }
  ])],
  controllers: [InsumoController],
  providers: [InsumoService]
})
export class InsumoModule {}
