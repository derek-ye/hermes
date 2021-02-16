import { Injectable } from '@nestjs/common';

@Injectable()
export class StripeHandlerService {
    async queryStripe() {
        const Stripe = require('stripe');
        const stripe = Stripe(process.env.STRIPE_SK);

        const account = await stripe.accounts.create({
            type: 'express',
        });
    }
}
