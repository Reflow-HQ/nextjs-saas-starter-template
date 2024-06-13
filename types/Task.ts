export type Task = {
  id?: number;
  userId: number;
  title: string;
  description: string;
  is_completed: boolean;
  createdAt?: Date;
};
