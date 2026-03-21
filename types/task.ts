export interface Task {
  todo_id?: number;
  title: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  create_at: Date;
}
