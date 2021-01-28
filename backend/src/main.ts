import { NestFactory } from '@nestjs/core';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { AppModule } from './app.module';

const corsConfig: CorsOptions = {
  origin: `https://${process.env.CLIENT_HOST_WEB}`,
};

async function bootstrap() {
  const port = process.env.APP_PORT || 3000;
  const app = await NestFactory.create(AppModule, { cors: corsConfig });

  await app.listen(port, async () => {
    console.log(`API is running on port ${port}`);
  });
}
bootstrap();
