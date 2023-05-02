import { Test, TestingModule } from '@nestjs/testing';
import { MotosController } from './motos.controller';
import { MotosService } from './motos.service';

describe('MotosController', () => {
  let controller: MotosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotosController],
      providers: [MotosService],
    }).compile();

    controller = module.get<MotosController>(MotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
