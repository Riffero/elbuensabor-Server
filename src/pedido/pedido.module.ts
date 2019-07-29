import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoSchema } from './schemas/pedido.schema';

@Module({
  imports: [ MongooseModule.forFeature([
    {name: 'Pedidos', schema: PedidoSchema}
  ])],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
