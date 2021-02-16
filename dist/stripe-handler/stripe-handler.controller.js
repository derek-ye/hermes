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
        this.stripeHandlerService.queryStripe();
        return 'hola mi amigo! your money is safe with us!';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StripeHandlerController.prototype, "getStripe", null);
StripeHandlerController = __decorate([
    common_1.Controller('stripe'),
    __metadata("design:paramtypes", [stripe_handler_service_1.StripeHandlerService])
], StripeHandlerController);
exports.StripeHandlerController = StripeHandlerController;
//# sourceMappingURL=stripe-handler.controller.js.map