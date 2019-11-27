import { Injectable, Inject } from '@js-machine-app/api/ioc';
import { Digest } from '@js-machine-app/models';
import { FirebaseService } from '@js-machine-app/api/services/firebase';

@Injectable()
export class DigestsService {
  @Inject() private firebaseService!: FirebaseService;

  public async getDigests(): Promise<Digest[]> {
    const snapshot = await this.firebaseService.firestore
      .collection('digests')
      .orderBy('date', 'desc')
      .get();

    return this.firebaseService.mapCollectionFromSnapshot(snapshot);
  }

  public async getDigestById(id: string): Promise<Digest> {
    const snapshot = await this.firebaseService.firestore
      .collection('digests')
      .doc(id)
      .get();

    return this.firebaseService.mapEntityFromSnapshot(snapshot);
  }

  public async createDigest(digest: Digest): Promise<string> {
    const reference = await this.firebaseService.firestore
      .collection('digests')
      .add(this.firebaseService.convertToFirebaseEntity(digest));

    return reference.id;
  }

  public async updateDigest(id: string, digest: Digest): Promise<void> {
    await this.firebaseService.firestore
      .collection('digests')
      .doc(id)
      .set(this.firebaseService.convertToFirebaseEntity(digest), {
        merge: true,
      });
  }

  public async deleteDigest(id: string): Promise<void> {
    await this.firebaseService.firestore
      .collection('digests')
      .doc(id)
      .delete();
  }
}
