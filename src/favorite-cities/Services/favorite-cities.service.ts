import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Favorites } from 'src/favorite-cities/Schemas/favorites.schema';
import { Model } from 'mongoose';
import { FavoritePostDTO } from 'src/favorite-cities/DTOs/FavoritesPostDTO,dto';
import { IFavoriteServices } from './Interfaces/favorite-cities.interface';

/**
 * Service for create, get or delete the favorite cities from Mongo DB.
*/
@Injectable()
export class FavoriteCitiesService implements IFavoriteServices {

    //Dependency Injection Variables
    @InjectModel(Favorites.name) private readonly _taskModel : Model<Favorites>

    /**
     * Constructor to inject the Favorites model.
     * @param taskModel The injected model for Favorites.
     */
    constructor(@InjectModel(Favorites.name) taskModel : Model<Favorites>){
        this._taskModel = taskModel;
    }

    /**
     * Find all favorite cities.
     * @returns A promise that resolves to an array of favorite cities.
     */
    public FindAll() {
        return this._taskModel.find();
    }

    /**
     * Find a favorite city by its name.
     * @param city The name of the city to find.
     * @returns A promise that resolves to the found city or null.
     */
    public FindOne(city:string) {
        return this._taskModel.findOne({city});
    }

    /**
     * Create a new favorite city.
     * @param favorite The data transfer object containing the city information.
     * @returns A promise that resolves to the created favorite city.
     */
    public async Create(favorite:FavoritePostDTO) {

        const newTask = new this._taskModel(favorite);
        await newTask.save();
        
        return newTask;
    }

    /**
     * Delete a favorite city by its ID.
     * @param id The ID of the city to delete.
     * @returns A promise that resolves to the result of the deletion.
     */
    public DeleteOne(id:string) {
        return this._taskModel.findByIdAndDelete(id);
    }

}
