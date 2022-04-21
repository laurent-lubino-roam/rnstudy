export type TodoInitialValues = {
  title: string;
  description?: string;
};

export class Todo {
  id: string;
  createdAt: number;
  checkedAt?: number;
  checked: boolean = false;
  title: string;
  description?: string;
  constructor({title, description}: TodoInitialValues) {
    this.id = Math.floor(9999999999 * Math.random()).toString();
    this.createdAt = Date.now();
    this.title = title;
    this.description = description;
  }
}
