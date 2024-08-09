import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CuponsService } from '../services/cupom.service';
import { ICupom } from '../interfaces/cupom.interface';
import { Cupom } from '../entities/cupom.entity';

@Controller('cupons')
export class CuponsController {
  constructor(private readonly cuponsService: CuponsService) {}

  @Get()
  async findAll(): Promise<Cupom[]> {
    return this.cuponsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cupom> {
    return this.cuponsService.findOne(id);
  }

  @Post()
  async create(@Body() cupom: ICupom): Promise<Cupom> {
    return this.cuponsService.create(cupom);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() cupom: ICupom): Promise<Cupom> {
    return this.cuponsService.update(id, cupom);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.cuponsService.delete(id);
  }
}
