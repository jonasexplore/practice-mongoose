import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BirthService } from './birth.service';
import { Birth } from './domain';

@Controller('birth')
export class BirthController {
  constructor(private readonly birthService: BirthService) {}

  @Post()
  create(@Body() createBirthDto: Birth) {
    return this.birthService.create(createBirthDto);
  }

  @Get()
  findAll() {
    return this.birthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.birthService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBirthDto: Birth) {
    return this.birthService.update(id, updateBirthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birthService.remove(id);
  }
}
