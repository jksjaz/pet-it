import { Injectable } from '@nestjs/common';
import { CreatePetInput } from '../../dto/create-pet-input/create-pet-input';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createInput: CreatePetInput) {
    return this.prisma.pet.create({
      data: {
        ...createInput,
      },
    });
  }
}
