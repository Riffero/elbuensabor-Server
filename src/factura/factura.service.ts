import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { Factura } from './interfaces/factura.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FacturaService extends BaseAbmService<Factura>{

    constructor(
        @InjectModel('Facturas')
        private readonly facturaModel: Model<Factura>){
        super(facturaModel);
    }
}
