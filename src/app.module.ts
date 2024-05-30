import { Module } from '@nestjs/common';
import { FavoriteCitiesModule } from './favorite-cities/favorite-cities.module';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * Root module of the backend application.
 */
@Module({
  imports: [
    FavoriteCitiesModule, //Add Favorite Cities Module
    MongooseModule.forRoot('mongodb://localhost/favoriteCities')  //MongoDB database connection with DB String Connection
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
