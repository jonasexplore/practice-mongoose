import { Test, TestingModule } from '@nestjs/testing';
import { BirthController } from './birth.controller';
import { BirthService } from './birth.service';

describe('BirthController', () => {
  let controller: BirthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirthController],
      providers: [BirthService],
    }).compile();

    controller = module.get<BirthController>(BirthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
