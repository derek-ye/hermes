import { Controller, Get, Post } from '@nestjs/common';
import { StripeHandlerService } from './stripe-handler.service';


@Controller('stripe')
export class StripeHandlerController {
    constructor(private stripeHandlerService: StripeHandlerService) {}

    @Post('create-checkout-session')
    getStripe(): Promise<{ id: any; }> {
        return this.stripeHandlerService.queryStripe()
        // return 'Hello! Your information is currently being processed by Stripe!';
    }

    @Get('create-checkout-session/success') 
    getSuccess () {
        return 'Your payment has been processed :)'
    }

    @Get('create-checkout-session/cancel') 
    getCancel() {
        return 'Your payment has been cancelled :('
    }
}
