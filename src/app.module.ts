import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeHandlerService } from './stripe-handler/stripe-handler.service';
import { StripeHandlerController } from './stripe-handler/stripe-handler.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, StripeHandlerController],
  providers: [AppService, StripeHandlerService],
})
export class AppModule {}
