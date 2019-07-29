import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { Estado } from './interfaces/estado.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EstadoService extends BaseAbmService<Estado>{

    constructor(
        @InjectModel('Estados')
        private readonly estadoModel: Model<Estado>){
            super(estadoModel);
        }
}
