type Result = "success" | "error";

function handleResult(result: Result): void {
    if (result === "success") {
        console.log("Operation successful!");
    } else {
        console.log("Operation failed.");
    }
}

handleResult("success");

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    return value;
}
