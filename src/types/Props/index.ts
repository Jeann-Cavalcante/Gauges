export type PropsGauges = {
  value: number;
  titleLabel: string;
};

export type PropsPie = {
  value: string;
  title: string;
};

export type PropsTabs = {
  active: string;
  handleActive: (active: "pessoal" | "departamento") => void;
};