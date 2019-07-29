import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { Producto } from './interfaces/producto.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductoService extends BaseAbmService<Producto>{

    constructor(
        @InjectModel('Productos')
        private readonly productoModel: Model<Producto>){
            super(productoModel);
    }
}
