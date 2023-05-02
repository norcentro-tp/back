import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasMotoService } from './categorias_moto.service';

describe('CategoriasMotoService', () => {
  let service: CategoriasMotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasMotoService],
    }).compile();

    service = module.get<CategoriasMotoService>(CategoriasMotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
