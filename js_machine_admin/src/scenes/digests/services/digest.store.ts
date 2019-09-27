import { useContext, createContext } from 'react';
import { observable, action, runInAction, configure, computed } from 'mobx';
import { DigestCycle } from 'models';
import { saveAs } from 'file-saver';
import { readMdFromFile } from 'utils/readMdFromFile';
import {
  getDigests,
  hideDigest,
  showDigest,
  uploadDigestMd,
  createDigest,
  deleteDigest,
  saveDigest,
} from './digest.api';

configure({ enforceActions: 'observed' });

export class DigestStore {
  @observable public digests!: DigestCycle[];

  public constructor() {
    this.init();
  }

  @action public init = () => {
    this.digests = [];
  };

  @computed public get sortedDigests() {
    return this.digests.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  @action public loadDigests = async () => {
    if (!this.digests.length) {
      const digests = await getDigests();
      runInAction(() => (this.digests = digests));
    }
  };

  @action public createDigest = async (digest: DigestCycle) => {
    try {
      const { id } = await createDigest(digest);
      runInAction(() => {
        digest.id = id;
        this.digests.push(digest);
      });
    } catch (err) {
      console.error(err);
    }
  };

  @action public saveDigest = async (digest: DigestCycle) => {
    try {
      await saveDigest(digest);
      runInAction(() => {
        this.digests = this.digests.map(d => (d.id === digest.id ? digest : d));
      });
    } catch (err) {
      console.error(err);
    }
  };

  @action public hideDigest = async (digest: DigestCycle) => {
    try {
      await hideDigest(digest.id);
      runInAction(() => (digest.visible = false));
    } catch (err) {
      console.error(err);
    }
  };

  @action public showDigest = async (digest: DigestCycle) => {
    try {
      await showDigest(digest.id);
      runInAction(() => (digest.visible = true));
    } catch (err) {
      console.error(err);
    }
  };

  @action public uploadDigest = async (digest: DigestCycle, file: File) => {
    try {
      const content = await readMdFromFile(file);
      await uploadDigestMd(digest.id, content);
      runInAction(() => (digest.content = content));
    } catch (err) {
      console.error(err);
    }
  };

  @action public downloadDigest = async (digest: DigestCycle) => {
    const blob: Blob = new Blob([digest.content], {
      type: 'text/plain;charset=utf-8',
    });

    saveAs(blob, `${digest.title}.md`);
  };

  @action public deleteDigest = async (digest: DigestCycle) => {
    try {
      await deleteDigest(digest.id);
      runInAction(
        () => (this.digests = this.digests.filter(d => d.id !== digest.id)),
      );
    } catch (err) {
      console.error(err);
    }
  };

  public findDigestById = async (id: string) => {
    if (!this.digests.length) {
      await this.loadDigests();
    }

    return this.digests.find(d => d.id === id);
  };
}

const StoreContext = createContext(new DigestStore());
export const useDigestStore = () => useContext(StoreContext);
