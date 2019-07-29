import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { DetallePedido } from './interfaces/detalle-pedido.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DetallePedidoService extends BaseAbmService<DetallePedido>{

    constructor(
        @InjectModel('DetallesPedido')
        private readonly detallePedidoModel: Model<DetallePedido>){
            super(detallePedidoModel);
        }
}
