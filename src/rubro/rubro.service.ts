import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { Rubro } from './interfaces/rubro.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RubroService extends BaseAbmService<Rubro>{
    constructor(
        @InjectModel('Rubros')
        private readonly rubroModel: Model<Rubro>){
            super(rubroModel);
        }
}
