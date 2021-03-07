import { Injectable } from '@nestjs/common';

@Injectable()
export class StripeHandlerService {
    async queryStripe() {
        const Stripe = require('stripe');
        const stripe = Stripe(process.env.STRIPE_SK);
        const DOMAIN_URL = 'http://localhost:3000/stripe/create-checkout-session'


        const session = await stripe.checkout.sessions.create({

            payment_method_types: ['card'],
        
            line_items: [
        
              {
        
                price_data: {
        
                  currency: 'usd',
        
                  product_data: {
        
                    name: 'Stubborn Attachments',
        
                    images: ['https://i.imgur.com/EHyR2nP.png'],
        
                  },
        
                  unit_amount: 2000,
        
                },
        
                quantity: 1,
        
              },
        
            ],
        
            mode: 'payment',
        
            success_url: `${DOMAIN_URL}/success`,
        
            cancel_url: `${DOMAIN_URL}/cancel`,
        
          });
        
          console.log({ id: session.id });
          return { id: session.id };

    }

}
