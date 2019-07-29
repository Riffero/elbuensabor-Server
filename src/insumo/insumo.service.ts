import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseAbmService } from 'src/generico/base-abm.service';
import { Insumo } from './interfaces/insumo.interface';


@Injectable()
export class InsumoService extends BaseAbmService<Insumo>{

    constructor(
        @InjectModel('Insumos')
        private readonly insumoModel: Model<Insumo>){
        super(insumoModel);
    }
}
