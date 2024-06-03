import { FavoritePostDTO } from "src/favorite-cities/DTOs/FavoritesPostDTO,dto";

export interface IFavoriteServices {
    FindAll();
    FindOne(city:string);
    Create(favorite:FavoritePostDTO);
    DeleteOne(id:string);    
}