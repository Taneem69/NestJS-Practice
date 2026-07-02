import { Injectable } from '@nestjs/common';
import{CreateCourseDto} from './dto/create-course.dto';
import{UpdateCourseDto} from './dto/update-course.dto';


@Injectable()
export class CourseService {
  getAllCourses(): string {
    return {
      message: 'All courses fetched successfully',
      data: [],
    };
  }

  getCourseById(id: string): string {
    return {
      message: 'Course fetched successfully',
      id,
    };
  }

  createCourse(): string {
    return {
      message: 'Course created successfully',
      data: createCourseDto, // returns the whole DTO
    };
  }

  updateCourse(id: string): string {
    return{
      message: 'Course updated successfully',
      id,
      data: updateCourseDto,
    };
  }

  patchCourse(id: string): string {
    // For patch, we could return only the fields that were actually updated.
    // Since PartialType makes all optional, we can list the keys that are present.
    const updatedFields = Object.keys(updateCourseDto).filter(
      (key) => updateCourseDto[key] !== undefined,
    );
    return {
      message: 'Course patched successfully',
      id,
      updatedFields,
    };
  }

  deleteCourse(id: string): string {
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