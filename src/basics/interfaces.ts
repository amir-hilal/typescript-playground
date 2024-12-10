interface User {
  name: string;
  age: number;
  isAdmin?: boolean; //optional property
}

const user: User = { name: "Alice", age: 25 };

interface Employee extends User {
  employeeId: number;
}

const employee: Employee = { name: "Bob", age: 30, employeeId: 1234 };
