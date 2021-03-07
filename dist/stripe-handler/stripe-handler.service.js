"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeHandlerService = void 0;
const common_1 = require("@nestjs/common");
let StripeHandlerService = class StripeHandlerService {
    async queryStripe() {
        const Stripe = require('stripe');
        const stripe = Stripe(process.env.STRIPE_SK);
        const DOMAIN_URL = 'http://localhost:3000/stripe/create-checkout-session';
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
};
StripeHandlerService = __decorate([
    common_1.Injectable()
], StripeHandlerService);
exports.StripeHandlerService = StripeHandlerService;
//# sourceMappingURL=stripe-handler.service.js.map