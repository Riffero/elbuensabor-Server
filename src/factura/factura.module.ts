import { Module } from '@nestjs/common';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FacturaSchema } from './schemas/factura.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Facturas', schema: FacturaSchema}
  ])],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
