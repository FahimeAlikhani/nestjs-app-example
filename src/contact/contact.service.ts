import { Injectable, Param } from '@nestjs/common';
import { Contact as ContactModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { contactData as CreateContactDto } from '../dtos/CreateContactDto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ContactModel[]> {
    return this.prisma.contact.findMany();
  }

  async findById(@Param('id') id: number): Promise<ContactModel | undefined> {
    return this.prisma.contact.findUnique({
      where: { id: Number(id) },
    });
  }

  async createContact(contactData: CreateContactDto): Promise<ContactModel> {
    return this.prisma.contact.create({
      data: contactData,
    });
  }
  async updateContact(params: {
    where: Prisma.ContactWhereUniqueInput;
    data: Prisma.ContactUpdateInput;
  }): Promise<ContactModel> {
    const { where, data } = params;
    return this.prisma.contact.update({
      data,
      where,
    });
  }

  async deleteContact(
    where: Prisma.ContactWhereUniqueInput,
  ): Promise<ContactModel> {
    return this.prisma.contact.delete({
      where,
    });
  }
}
