import { Document } from 'mongoose';

export interface Rubro extends Document{
    id: string;
    denominacion: string;
  }