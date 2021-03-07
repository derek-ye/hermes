"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeHandlerController = void 0;
const common_1 = require("@nestjs/common");
const stripe_handler_service_1 = require("./stripe-handler.service");
let StripeHandlerController = class StripeHandlerController {
    constructor(stripeHandlerService) {
        this.stripeHandlerService = stripeHandlerService;
    }
    getStripe() {
        return this.stripeHandlerService.queryStripe();
    }
    getSuccess() {
        return 'Your payment has been processed :)';
    }
    getCancel() {
        return 'Your payment has been cancelled :(';
    }
};
__decorate([
    common_1.Post('create-checkout-session'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StripeHandlerController.prototype, "getStripe", null);
__decorate([
    common_1.Get('create-checkout-session/success'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StripeHandlerController.prototype, "getSuccess", null);
__decorate([
    common_1.Get('create-checkout-session/cancel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StripeHandlerController.prototype, "getCancel", null);
StripeHandlerController = __decorate([
    common_1.Controller('stripe'),
    __metadata("design:paramtypes", [stripe_handler_service_1.StripeHandlerService])
], StripeHandlerController);
exports.StripeHandlerController = StripeHandlerController;
//# sourceMappingURL=stripe-handler.controller.js.map