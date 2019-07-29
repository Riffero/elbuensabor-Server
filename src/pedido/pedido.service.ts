import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { Pedido } from './interfaces/pedido.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PedidoService extends BaseAbmService<Pedido>{

    constructor(
        @InjectModel('Pedidos')
        private readonly pedidoModel: Model<Pedido>){
            super(pedidoModel);
        }
}
