import { Document } from "mongoose";

export interface IBaseAbmService<T>{
    getAll():Promise<T[]>;
    getById(id:string):Promise<T>;
    update(id:string, entity: T): Promise<T>;
    create(entity: T):Promise<T>;
    delete(id:string);
}