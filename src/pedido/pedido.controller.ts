import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { Pedido } from './interfaces/pedido.interface';
import { PedidoService } from './pedido.service';

@Controller('api/v1/pedidos')
export class PedidoController extends BaseController<Pedido>{

    constructor(private _pedidoService:PedidoService){
        super(_pedidoService);
    }
}
