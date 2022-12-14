import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService2, IAppService } from './app.service';

// Isso aqui seria meu modelo? (entidade, objecto de dados, sei lá...)
// Ou seria algo de arquitetura de domínios como foi no bootcamp?

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: IAppService,
      useClass: AppService2,
    },
  ],
})
export class AppModule {}
