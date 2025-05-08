// Problem 1: formatString
function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Problem 2: filterByRating
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// Problem 3: concatenateArrays
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Problem 4: Vehicle and Car classes
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Problem 5: processValue
function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

// Problem 6: getMostExpensiveProduct
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((max, item) => (item.price > max.price ? item : max));
}

// Problem 7: Day enum and getDayType
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// Problem 8: squareAsync
async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
