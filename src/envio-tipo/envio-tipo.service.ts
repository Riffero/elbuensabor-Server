import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { EnvioTipo } from './interfaces/envio-tipo.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EnvioTipoService extends BaseAbmService<EnvioTipo>{

    constructor(
        @InjectModel('EnviosTipos')
        private readonly envioTipoModel: Model<EnvioTipo>){
            super(envioTipoModel);
        }
}
