export interface IProps {
  href: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
}

export interface INotificationLinkProps extends IProps {
  userAvatar: string;
  videoThumbnail: string;
}

export interface ISocialLinkProps extends IProps {
  social: "Facebook" | "Instagram" | "Twitter" | "Discord" | "Reddit";
}