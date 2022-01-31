export interface IVideoTableDataProps {
  thumbnail: string;
  title: string;
  views: number;
  comments: number;
  date: string;
  likesDislikesPercentage: number;
}

export interface IVideoListProps {
  videos: IVideoTableDataProps[];
}

export interface IProps {
  videos: IVideoTableDataProps[];
}
