import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrollmentService {
    constructor(private readonly courseService: CourseService, @Inject(forwardRef(()=> NotificationService)) private readonly notificationService: NotificationService){}

    getEnrollments(){
        return {message: 'All enrollments fetched', data: []};
    }

    enrollStudent(studentName: string, courseId: string){
        const course=this.courseService.getCourseById(courseId);

        const notification= this.notificationService.sendNotification(studentName, `enrolled in course ${courseId}`,);

        return {
            message: 'Student enrolled successfully',

            student: studentName,
            course,
            notification,
        };
    }
}
