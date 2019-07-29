import { Module } from '@nestjs/common';
import { DetallePedidoService } from './detalle-pedido.service';
import { DetallePedidoController } from './detalle-pedido.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DetallePedidoSchema } from './schemas/detalle-pedido.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'DetallesPedido', schema: DetallePedidoSchema}
  ])],
  providers: [DetallePedidoService],
  controllers: [DetallePedidoController]
})
export class DetallePedidoModule {}
