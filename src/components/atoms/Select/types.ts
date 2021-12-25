export type ItemType = {
  label: string;
  value: string | null;
  key: string;
};

export type CustomSelect = {
  onChange: (value: string) => void;
  title: string;
  placeHolder: ItemType;
  options: ItemType[];
};
