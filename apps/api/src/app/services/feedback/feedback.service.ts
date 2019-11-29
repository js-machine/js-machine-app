import { Injectable, Inject } from '@js-machine-app/api/ioc';
import { Feedback } from '@js-machine-app/models';
import { FirebaseService } from '@js-machine-app/api/services/firebase';

@Injectable()
export class FeedbackService {
  @Inject() private firebaseService!: FirebaseService;

  public async getFeedbacks(): Promise<Feedback[]> {
    const snapshot = await this.firebaseService.firestore
      .collection('feedbacks')
      .orderBy('date', 'desc')
      .get();

    return this.firebaseService.mapCollectionFromSnapshot(snapshot);
  }

  public async createFeedback(feedback: Feedback): Promise<string> {
    const reference = await this.firebaseService.firestore
      .collection('feedbacks')
      .add(this.firebaseService.convertToFirebaseEntity(feedback));

    return reference.id;
  }
}
