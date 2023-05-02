import { Test, TestingModule } from '@nestjs/testing';
import { EstadosMotoController } from './estados_moto.controller';
import { EstadosMotoService } from './estados_moto.service';

describe('EstadosMotoController', () => {
  let controller: EstadosMotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosMotoController],
      providers: [EstadosMotoService],
    }).compile();

    controller = module.get<EstadosMotoController>(EstadosMotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
