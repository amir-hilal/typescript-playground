interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<ApiResponse[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: ApiResponse[] = await response.json();
  return data;
}

fetchTodos().then(todos => console.log(todos));
