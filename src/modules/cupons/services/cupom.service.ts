import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cupom } from '../entities/cupom.entity';
import { ICupom } from '../interfaces/cupom.interface';


@Injectable()
export class CuponsService {
  constructor(
    @InjectRepository(Cupom)
    private readonly cuponsRepository: Repository<Cupom>,
  ) {}

  async findAll(): Promise<Cupom[]> {
    return this.cuponsRepository.find();
  }

  async findOne(id: number): Promise<Cupom> {
    return this.cuponsRepository.findOne({ where: { cupom_id: id } });
  }

  async create(cupom: ICupom): Promise<Cupom> {
    const newCupom = this.cuponsRepository.create(cupom);
    return this.cuponsRepository.save(newCupom);
  }

  async update(id: number, cupom: ICupom): Promise<Cupom> {
    await this.cuponsRepository.update(id, cupom);
    return this.cuponsRepository.findOne({ where: { cupom_id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.cuponsRepository.delete(id);
  }
}
