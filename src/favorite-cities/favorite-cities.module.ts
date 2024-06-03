import { Module } from '@nestjs/common';
import { FavoriteCitiesService } from './Services/favorite-cities.service';
import { FavoriteCitiesController } from './favorite-cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Favorites, TaskSchema } from './Schemas/favorites.schema';

@Module({
  imports: [
    //Imports mongo schema 
    MongooseModule.forFeature([
      {
        name: Favorites.name,
        schema: TaskSchema
      }
    ])
  ],
  controllers: [FavoriteCitiesController],
  providers: [FavoriteCitiesService],
  exports: []
})
export class FavoriteCitiesModule {}
