import { Controller, Get, Post, Route, Body } from 'tsoa';
import { Inject } from '@js-machine-app/api/ioc';
import { FeedbackService } from '@js-machine-app/api/services/feedback';
import { Feedback } from '@js-machine-app/models';

@Route('feedbacks')
export class FeedbacksController extends Controller {
  @Inject() private feedbackService!: FeedbackService;

  @Get()
  public async getFeedbacks(): Promise<Feedback[]> {
    return this.feedbackService.getFeedbacks();
  }

  @Post()
  public async createFeedback(@Body() feedback: Feedback): Promise<string> {
    return this.feedbackService.createFeedback(feedback);
  }
}
