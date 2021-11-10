export interface IProps {
  thumbnail: string;
  title: string;
  duration: string;
  date?: string;
  views: string;
  channel: {
    picture: string;
    name: string;
  };
}
