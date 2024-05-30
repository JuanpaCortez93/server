import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

/**
 * Class representing the Favorites collection.
 * Includes the city as a unique and required field.
 */

@Schema({
    // Automatically adds `createdAt` and `updatedAt` properties to each document
    timestamps: true
})
export class Favorites {
    
    /**
     * City field represents the city in the Favorites collection.
     * It is unique, required, and trimmed.
     */
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    city : string;
}

// Generates a Mongoose schema from the `Favorites` class
export const TaskSchema = SchemaFactory.createForClass(Favorites);