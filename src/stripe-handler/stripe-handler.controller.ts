import { Controller, Get } from '@nestjs/common';
import { StripeHandlerService } from './stripe-handler.service';

@Controller('stripe')
export class StripeHandlerController {
    constructor(private stripeHandlerService: StripeHandlerService) {}

    @Get()
    getStripe(): string {
        this.stripeHandlerService.queryStripe();
        return 'hola mi amigo! your money is safe with us!';
    }
}
