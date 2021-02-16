import { Test, TestingModule } from '@nestjs/testing';
import { StripeHandlerController } from './stripe-handler.controller';

describe('StripeHandlerController', () => {
  let controller: StripeHandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StripeHandlerController],
    }).compile();

    controller = module.get<StripeHandlerController>(StripeHandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
