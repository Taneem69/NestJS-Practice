import { Module, forwardRef } from '@nestjs/common';
import { CourseModule } from 'src/course/course.module';
import { NotificationModule } from '../notification/notification.module';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';

@Module({
  imports: [CourseModule, forwardRef(()=> NotificationModule)],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
