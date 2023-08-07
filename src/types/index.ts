type Badge = {
  title: string;
  color: string;
};

type Icons = {
  name: string;
  color: string;
  notification?: number;
};

export type AppointmentsDb = {
  id: number;
  title: string;
  badge: Badge[];
  icons: Icons[];
  alert?: string;
  image?: string;
  arrow?: string;
};
