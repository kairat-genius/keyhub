type Option = {
  id: string;
  name: string;
}

export interface SelectProps {
  items: Option[];
  value: string;
  onChange: (item: string) => void;
}
