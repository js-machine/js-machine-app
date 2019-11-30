import { action, configure, observable, runInAction } from 'mobx';
import firebase from 'firebase/app';
import { RootStore } from './root.store';

configure({ enforceActions: 'always' });

export class AuthStore {
  @observable public user?: firebase.User | null;

  public constructor(private rootStore: RootStore) {
    // firebase.auth().onAuthStateChanged(user => {
    //   runInAction(() => (this.user = user));
    // });
  }

  @action public register = async (login: string, password: string) => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(login, password);

      if (userCredential.user) {
        runInAction(() => this.rootStore.routerStore.push('/'));
      }
    } catch (err) {
      this.error(err);
    }
  };

  @action public login = async (login: string, password: string) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(login, password);

      if (userCredential.user) {
        runInAction(() => this.rootStore.routerStore.push('/'));
      }
    } catch (err) {
      this.error(err);
    }
  };

  @action public loginGmail = async () => {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        const user = res.user;

        if (user) {
          runInAction(() => this.rootStore.routerStore.push('/'));
        }
      })
      .catch(err => {
        this.error(err);
      });
  };

  @action public logout = async () => {
    await firebase.auth().signOut();
  };

  private error<T>(log: T): void {
    // tslint:disable-next-line: no-console
    console.error(log);
  }
}
