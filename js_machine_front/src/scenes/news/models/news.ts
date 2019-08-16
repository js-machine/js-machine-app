export interface News {
    id: number;
    date: string;
    title: string;
    description: string;
}

export interface NewsModel {
    newsData: News[];
}