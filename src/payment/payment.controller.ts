import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment as PaymentModel } from '@prisma/client';
import { paymentData as CreatePaymentDto } from '../dtos/CreatePaymentDto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get()
  async getAllPayments(): Promise<PaymentModel[]> {
    return this.paymentService.findAll();
  }

  @Get('/payment :id')
  async getPaymentById(@Param('id') id: number): Promise<PaymentModel> {
    return this.paymentService.findById(id);
  }

  @Post('/payment')
  async signupPayment(
    @Body()
    paymentData: CreatePaymentDto,
  ): Promise<PaymentModel> {
    return this.paymentService.createPayment(paymentData);
  }

  @Put(' /payment :id')
  async updatePayment(@Param('id') id: string): Promise<PaymentModel> {
    return this.paymentService.updatePayment({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('payment/:id')
  async deletePayment(@Param('id') id: string): Promise<PaymentModel> {
    return this.paymentService.deletePayment({ id: Number(id) });
  }
}
