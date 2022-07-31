import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact as ContactModel } from '@prisma/client';
import { contactData as CreateContactDto } from '../dtos/CreateContactDto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
@ApiTags('contact')
@ApiHeader({
  name: 'contact',
  description: 'all user contacts',
})
@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  async getAllContacts(): Promise<ContactModel[]> {
    return this.contactService.findAll();
  }

  @Get('/contact :id')
  async getContactById(@Param('id') id: number): Promise<ContactModel> {
    return this.contactService.findById(id);
  }

  @Post('/contact')
  async signupContact(
    @Body()
    contactData: CreateContactDto,
  ): Promise<ContactModel> {
    return this.contactService.createContact(contactData);
  }

  @Put(' /contact :id')
  async updateContact(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.updateContact({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('contact/:id')
  async deleteContact(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.deleteContact({ id: Number(id) });
  }
}
