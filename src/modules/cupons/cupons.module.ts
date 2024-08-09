import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuponsService } from './services/cupom.service';
import { CuponsController } from './controllers/cupom.controller';
import { Cupom } from './entities/cupom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cupom])],
  controllers: [CuponsController],
  providers: [CuponsService],
  exports: [CuponsService],
})
export class CuponsModule {}
