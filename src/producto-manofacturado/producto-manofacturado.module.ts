import { Module } from '@nestjs/common';
import { ProductoManofacturadoController } from './producto-manofacturado.controller';
import { ProductoManofacturadoService } from './producto-manofacturado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoManofacturadoSchema } from './schemas/producto-manofacturado.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'ProductosManofacturados', schema: ProductoManofacturadoSchema}
  ])],
  controllers: [ProductoManofacturadoController],
  providers: [ProductoManofacturadoService]
})
export class ProductoManofacturadoModule {}
