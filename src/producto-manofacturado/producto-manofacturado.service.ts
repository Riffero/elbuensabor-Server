import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { ProductoManofacturado } from './interfaces/producto-manofacturado.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductoManofacturadoService extends BaseAbmService<ProductoManofacturado>{

    constructor(
        @InjectModel('ProductosManofacturados')
        private readonly productoManofacturadoModel: Model<ProductoManofacturado>){
        super(productoManofacturadoModel);
    }
}
