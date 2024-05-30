import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsString } from "class-validator";

/**
 *  FavoritePostDTO class represents the favorite cities DTO in the backend 
 */

export class FavoritePostDTO {
    /**
     * The city field must be string and not empty.
     */
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string;
}