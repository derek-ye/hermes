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
        const account = await stripe.accounts.create({
            type: 'express',
        });
    }
};
StripeHandlerService = __decorate([
    common_1.Injectable()
], StripeHandlerService);
exports.StripeHandlerService = StripeHandlerService;
//# sourceMappingURL=stripe-handler.service.js.map