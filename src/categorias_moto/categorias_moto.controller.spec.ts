import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasMotoController } from './categorias_moto.controller';
import { CategoriasMotoService } from './categorias_moto.service';

describe('CategoriasMotoController', () => {
  let controller: CategoriasMotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasMotoController],
      providers: [CategoriasMotoService],
    }).compile();

    controller = module.get<CategoriasMotoController>(CategoriasMotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
