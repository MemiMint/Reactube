export interface IProps {
    picture: string;
    username: string;
    date: string;
    comment: string;
    likesAndDislikes: {
        likes: number;
        dislikes: number;
    }
}