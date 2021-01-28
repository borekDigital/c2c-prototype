import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greeting = process.env.APP_GREETING;

  getHello(): { greeting: string } {
    return { greeting: this.greeting };
  }
}
