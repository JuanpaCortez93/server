import { Body, ConflictException, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { FavoriteCitiesService } from './Services/favorite-cities.service';
import { FavoritePostDTO } from './DTOs/FavoritesPostDTO,dto';
import { ApiExtraModels, ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

/**
 * Controller for handling favorite cities from DB (GET, POST and DELETE).
 */
@Controller('api/favorite')
export class FavoriteCitiesController {

    //Depedency injection variables
    private readonly _taskService : FavoriteCitiesService;

    /**
     * Constructor to inject the FavoriteCitiesService.
     * @param taskService The injected service for favorite cities.
     */
    constructor(taskService : FavoriteCitiesService) {
        this._taskService = taskService;
    }

    /**
     * GET /api/favorite/
     * Retrieves all favorite cities.
     * @returns A list of all favorite cities.
     */
    @ApiTags('Favorite Cities')
    @ApiOperation({'summary': 'Get all cities from DB'})
    @ApiResponse({ status: 200, description: 'Returns all cities'})
    @Get('/')
    public FindAll() {
        const favsFound = this._taskService.FindAll();
        return favsFound;
    }

    /**
     * GET /api/favorite/:city
     * Retrieves a favorite city by its name.
     * @param city The name of the city to find.
     * @returns The found city or throws a NotFoundException if not found.
     */
    @ApiTags('Favorite Cities')
    @ApiOperation({'summary': 'Get a city given the city name from DB'})
    @ApiResponse({ status: 200, description: 'Returns a city given the id'})
    @ApiResponse({ status: 404, description: 'City not found exception'})
    @Get('/:city')
    public FindOneByName(@Param('city') city : string) {
        const cityFound = this._taskService.FindOne(city);
        if(!cityFound) throw new NotFoundException('City not found');
        return cityFound;
    }

    /**
     * POST /api/favorite/
     * Creates a new favorite city.
     * @param body The data transfer object containing the city information.
     * @returns The created favorite city or throws a ConflictException if the city already exists.
     */
    @ApiTags('Favorite Cities')
    @ApiOperation({'summary': 'Create a city given a {city} in the DB'})
    @ApiExtraModels(FavoritePostDTO)
    @ApiResponse({ status: 200, description: 'Create a city and returns the city'})
    @ApiResponse({ status: 404, description: 'City not found exception'})
    @Post('/')
    public async CreateOne(@Body() body : FavoritePostDTO) {
        try {
            body.city = body.city.toLowerCase();
            return await this._taskService.Create(body);
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('City already exist');
            }

            throw error;
        }
    }

    /**
     * DELETE /api/favorite/:id
     * Deletes a favorite city by its ID.
     * @param id The ID of the city to delete.
     * @returns The deleted city or throws a NotFoundException if not found.
     */
    @ApiTags('Favorite Cities')
    @ApiOperation({'summary': 'Delete a city given an id : string'})
    @ApiResponse({ status: 200, description: 'Delete a city and returns the city'})
    @ApiResponse({ status: 404, description: 'City not found exception'})
    @Delete('/:id')
    public async DeleteOne(@Param('id') id : string) {
        const favDeleted = await this._taskService.DeleteOne(id);
        if(!favDeleted) throw new NotFoundException('Task not found');
        return favDeleted;
    }

}
