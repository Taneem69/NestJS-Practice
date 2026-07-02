import { 
    IsString,
    IsNotEmpty,
    IsNumber,
    Min,
    Max,
    IsOptional
 } from "class-validator";

 import{Type} from 'class-transformer';

 export class CreateCourseDto{

    @IsString()
    @IsNotEmpty({message: 'name should not be empty'})
    name: string;

    @IsString()
    @IsNotEmpty({message: 'code should not be empty'})
    code: string;

    @IsString()
    @IsNotEmpty({message: 'instructor should not be empty'})
    instructor: string;


    @IsNumber()
    @Min(1, {message: 'Credits must be at least 1'})
    @Max(6, {message: 'Credits must not be greater than 6'})
    @Type(()=>Number)
    credits: number;


    @IsOptional()
    @IsString()
    description?: string;
 }