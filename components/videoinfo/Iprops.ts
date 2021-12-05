export interface IProps {
    title: string;
    views: number;
    date: string;
    likesAndDislikes: {
        likes: number;
        dislikes: number;
    }
}