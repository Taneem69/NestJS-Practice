import { Injectable } from '@nestjs/common';
import{CreateCourseDto} from './dto/create-course.dto';
import{UpdateCourseDto} from './dto/update-course.dto';


@Injectable()
export class CourseService {
  getAllCourses(){
    return {
      message: 'All courses fetched successfully',
      data: [],
    };
  }

  getCourseById(id: string){
    return {
      message: 'Course fetched successfully',
      id,
    };
  }

  createCourse(createCourseDto: CreateCourseDto){
    return {
      message: 'Course created successfully',
      data: createCourseDto, // returns the whole DTO
    };
  }

  updateCourse(id: string, updateCourseDto: UpdateCourseDto){
    return{
      message: 'Course updated successfully',
      id,
      data: updateCourseDto,
    };
  }

  patchCourse(id: string, updateCourseDto: UpdateCourseDto){
    return {
      message: 'Course patched successfully',
      id,
      updatedFields: Object.keys(updateCourseDto),
    };
  }

  deleteCourse(id: string){
    return {
      message: 'Course deleted successfully',
      id,
    };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    // file contains originalname, filename (if storage renames), path, etc.
    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,   // if using diskStorage, we set filename
      path: file.path,           // or use file.destination + file.filename
    };
  }

  
}