import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { List } from './list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
  ) {}

  create(createListDto: CreateListDto): Promise<List> {
    const list = new List();
    list.name = createListDto.name;
    list.user = createListDto.user;

    return this.listRepository.save(list);
  }

  async findAll(): Promise<List[]> {
    return this.listRepository.find();
  }

  findOne(id: number): Promise<List> {
    return this.listRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.listRepository.delete(id);
  }
}