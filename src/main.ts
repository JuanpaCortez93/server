import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * The main function to bootstrap and start the NestJS application.
 */
async function bootstrap() {
  
  //Create a NestJS application instance using the AppModule
  const app = await NestFactory.create(AppModule);

  //Add Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Favorite Cities API Doc')
    .setDescription('Backend Web API description for Favorite Cities')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //Use global validation pipes to automatically validate incoming requests.
  app.useGlobalPipes(new ValidationPipe());

  // Enable Cross-Origin Resource Sharing (CORS) for the application.
  app.enableCors();

  // Start the application and listen for incoming requests on port 3000.
  await app.listen(3000);
}
bootstrap();
