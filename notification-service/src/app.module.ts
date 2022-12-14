import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

// Isso aqui seria meu modelo? (entidade, objecto de dados, sei lá...)
// Ou seria algo de arquitetura de domínios como foi no bootcamp?

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
