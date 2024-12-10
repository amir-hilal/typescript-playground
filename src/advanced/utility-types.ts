interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type PartialTask = Partial<Task>;
const newTask: PartialTask = { title: "Learn TypeScript" };

type ReadonlyTask = Readonly<Task>;
const readonlyTask: ReadonlyTask = { id: 1, title: "Review", completed: false };

// readonlyTask.id = 2;
