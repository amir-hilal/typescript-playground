//function with type annotations
function add(a: number, b: number): number {
  return a + b;
}

//default parameters, if no value passed into name, it defaults to Guest
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

//optional parameters
function log(message: string, user?: string): void {
  console.log(`${user ?? "System"}: ${message}`);
} //user will default to System if it was null because this parameter is optional
