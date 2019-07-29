import { Module } from '@nestjs/common';
import { RubroController } from './rubro.controller';
import { RubroService } from './rubro.service';
import { MongooseModule } from '@nestjs/mongoose';
import { rubroSchema } from './schemas/rubro.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Rubros', schema: rubroSchema}
  ])],
  controllers: [RubroController],
  providers: [RubroService]
})
export class RubroModule {}
