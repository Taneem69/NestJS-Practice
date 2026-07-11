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
   @IsNotEmpty({message: 'name should not beempty'})
   name: string;
   @IsString()
   @IsNotEmpty({message: 'code should not beempty'})
   code: string;
   @IsString()
   @IsNotEmpty({message: 'instructor should notbe empty'})
   instructor: string;
   @IsNumber()
   @Min(1, {message: 'Credits must be at least1'})
   @Max(6, {message: 'Credits must not be greaterthan 6'})
   @Type(()=>Number)
   credits: number;
   @IsOptional()
   @IsString()
   description?: string;
}