import { Test, TestingModule } from '@nestjs/testing';
import { BirthService } from './birth.service';

describe('BirthService', () => {
  let service: BirthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthService],
    }).compile();

    service = module.get<BirthService>(BirthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
