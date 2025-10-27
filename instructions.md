# 🚀 First Steps with TypeScript – Setup Guide

This guide walks you through setting up a TypeScript project using `ts-node`, based on the Fullstack Open Part 9 tutorial.

## 📦 Project Initialization

1. **Create a new directory and initialize npm:**
   ```bash
   mkdir ts-project
   cd ts-project
   npm init -y
   ```

2. **Install development dependencies:**
   ```bash
   npm install --save-dev typescript ts-node
   ```

3. **Add a script to `package.json`:**
   ```json
   "scripts": {
     "ts-node": "ts-node"
   }
   ```

## ⚙️ TypeScript Configuration

Create a `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "noImplicitAny": false
  }
}
```

## 🧪 Writing Your First TypeScript File

Create `multiplier.ts`:
```ts
const multiplicator = (a: number, b: number, printText: string): void => {
  console.log(printText, a * b);
};

multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');
```

Run it:
```bash
npm run ts-node -- multiplier.ts
```

## 🧠 Adding Type Safety

Update `multiplier.ts` to validate input:
```ts
interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: string[]): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const multiplicator = (a: number, b: number, printText: string): void => {
  console.log(printText, a * b);
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
```

## 🧰 Additional Setup

Install Node typings:
```bash
npm install --save-dev @types/node
```

## 🧮 Calculator Example

Create `calculator.ts`:
```ts
type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'add':
      return a + b;
    case 'divide':
      if (b === 0) throw new Error("Can't divide by 0!");
      return a / b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
};

try {
  console.log(calculator(1, 5, 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
```

## 🧪 Run Scripts

Add to `package.json`:
```json
"scripts": {
  "multiply": "ts-node multiplier.ts",
  "calculate": "ts-node calculator.ts"
}
```

Run:
```bash
npm run multiply 5 2
npm run calculate
```

## 🌐 Optional: Express Setup

Install Express:
```bash
npm install express
npm install --save-dev @types/express
```

Create `index.ts`:
```ts
import express from 'express';

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Add to `package.json`:
```json
"scripts": {
  "start": "ts-node index.ts"
}
```

Run:
```bash
npm start
```

