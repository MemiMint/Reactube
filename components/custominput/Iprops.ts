export interface IProps {
  label: string;
  link?: {
    href: string;
    text: string;
  };
  name: string;
  value: string;
  type: "text" | "password";
  placeholder?: string;
  maxLength?: number;
  icon: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
