export interface Digest {
  id: string;
  content: string;
  date: string;
  description: string;
  title: string;
  visible: boolean;
}

export interface Event {
  id: string;
  date: string;
  description: string;
  link: string;
  title: string;
}

export interface Feedback {
  date: string;
  text: string;
}
