import {Module, forwardRef } from '@nestjs/common';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [forwardRef(()=>EnrollmentModule)],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
