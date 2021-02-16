import { StripeHandlerService } from './stripe-handler.service';
export declare class StripeHandlerController {
    private stripeHandlerService;
    constructor(stripeHandlerService: StripeHandlerService);
    getStripe(): string;
}
