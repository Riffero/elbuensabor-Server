import { Controller } from '@nestjs/common';
import { DetallePedido } from './interfaces/detalle-pedido.interface';
import { DetallePedidoService } from './detalle-pedido.service';
import { BaseController } from 'src/generico/base.controller';

@Controller('api/v1/detalles-pedido')
export class DetallePedidoController extends BaseController<DetallePedido>{

    constructor(private _detallePedidoService: DetallePedidoService){
        super(_detallePedidoService);
    }
}
