import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService implements IAppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class AppService2 implements IAppService {
  getHello(): string {
    return 'Hello World!!!!!!!!!';
  }
}

export abstract class IAppService {
  getHello(): string {
    throw new Error('bnla');
  }
}
