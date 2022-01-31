export interface IProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
