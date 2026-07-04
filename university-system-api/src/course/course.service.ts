import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(){
        return {message: 'All courses feteched', data: []};
    }

    getCourseById(id: string){
        return {message: 'course fetched', id};
    }

    createCourse(name: string, code: string){
        return {message: 'Course created', data: {name, code},};
    }
}
