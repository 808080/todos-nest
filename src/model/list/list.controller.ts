import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateListDto } from './dto/create-list.dto';
import { List } from './list.entity';
import { ListService } from './list.service';

@Controller('rest/list')
@UseGuards(JwtAuthGuard)
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  create(@Body() createListDto: CreateListDto): Promise<List> {
    return this.listService.create(createListDto);
  }

  @Get()
  findAll(): Promise<List[]> {
    return this.listService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<List> {
    return this.listService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.listService.remove(id);
  }
}