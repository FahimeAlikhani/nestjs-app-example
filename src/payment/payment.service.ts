import { Injectable, Param } from '@nestjs/common';
import { Payment as PaymentModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { paymentData as CreatePaymentDto } from '../dtos/createPaymentDto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PaymentModel[]> {
    return this.prisma.payment.findMany();
  }

  async findById(@Param('id') id: number): Promise<PaymentModel | undefined> {
    return this.prisma.payment.findUnique({
      where: { id: Number(id) },
    });
  }

  async createPayment(paymentData: CreatePaymentDto): Promise<PaymentModel> {
    return this.prisma.payment.create({
      data: paymentData,
    });
  }
  async updatePayment(params: {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.PaymentUpdateInput;
  }): Promise<PaymentModel> {
    const { where, data } = params;
    return this.prisma.payment.update({
      data,
      where,
    });
  }

  async deletePayment(
    where: Prisma.PaymentWhereUniqueInput,
  ): Promise<PaymentModel> {
    return this.prisma.payment.delete({
      where,
    });
  }
}
