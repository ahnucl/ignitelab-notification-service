import { Controller, Get } from '@nestjs/common';
import { IAppService } from './app.service';

@Controller('app2')
export class AppController {
  constructor(private readonly appService: IAppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
