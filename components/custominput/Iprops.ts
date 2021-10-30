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
  errorLabel?: string;
  icon: React.ReactNode;
  displayEye?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
}
