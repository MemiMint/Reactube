export interface IProps {
  thumbnail: string;
  title: string;
  duration: string;
  views: string;
  channel: {
    picture: string;
    name: string;
  };
  date?: string;
  description?: string;
}
