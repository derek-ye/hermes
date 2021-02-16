import { Test, TestingModule } from '@nestjs/testing';
import { StripeHandlerService } from './stripe-handler.service';

describe('StripeHandlerService', () => {
  let service: StripeHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StripeHandlerService],
    }).compile();

    service = module.get<StripeHandlerService>(StripeHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
