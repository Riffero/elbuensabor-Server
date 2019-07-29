import { Injectable, BadGatewayException, NotFoundException } from '@nestjs/common';
import { Model, Document } from 'mongoose';

import { IBaseAbmService } from './interfaces/Ibase-abm.service';


@Injectable()
export class BaseAbmService<T> implements IBaseAbmService<T> {

    constructor(
        private readonly genericRepository: Model<Document>
    ) { }

    //Generic CRUD
    getAll(): Promise<T[]> {
        try {
            return <Promise<T[]>><unknown>this.genericRepository.find();
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    getById(id: string): Promise<T> {
        try {
            return <Promise<T>><unknown>this.genericRepository.findOne(id);
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async update(id: string, entity: T): Promise<any> {
        try {
            const updated = await this.genericRepository.findByIdAndUpdate(id, entity, {new: true});//new: true devuelve el objeto actualizado
            return updated;
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async create(entity: T): Promise<any> {
        try {
            const objeto = new this.genericRepository(entity);
            await objeto.save();
            return objeto;
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }
    async delete(id: string): Promise<any> {
        try {
            const deleted = await this.genericRepository.findByIdAndDelete(id);
            return deleted;
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

}