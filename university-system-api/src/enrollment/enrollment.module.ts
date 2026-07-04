import { Module } from '@nestjs/common';
import { CourseModule } from 'src/course/course.module';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';

@Module({
  imports: [CourseModule],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}
