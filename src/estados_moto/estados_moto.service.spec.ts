import { Test, TestingModule } from '@nestjs/testing';
import { EstadosMotoService } from './estados_moto.service';

describe('EstadosMotoService', () => {
  let service: EstadosMotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadosMotoService],
    }).compile();

    service = module.get<EstadosMotoService>(EstadosMotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
