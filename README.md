# TypeScript Project Setup

A complete TypeScript project demonstrating basic setup, type safety, and Express server implementation following the Fullstack Open Part 9 tutorial.

## 🚀 Features

- **TypeScript Configuration** with proper ES module support
- **Command-line Utilities** with argument parsing and validation
- **Calculator Functions** with type-safe operations
- **Express Web Server** with JSON API endpoints
- **Error Handling** with TypeScript error types
- **Development Scripts** for easy project management

## 📦 Project Structure

```
TypeScript/
├── calculator.ts       # Calculator with multiply, add, divide operations
├── multiplier.ts       # Command-line multiplier with argument validation
├── index.ts           # Express server with REST endpoints
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── instructions.md    # Original setup guide
└── README.md         # This file
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jugazabal/TypeScript.git
   cd TypeScript
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🚀 Usage

### Calculator
Run the calculator with predefined operations:
```bash
npm run calculate
```
Output: `0.2` (1 ÷ 5)

### Multiplier
Run the multiplier with command-line arguments:
```bash
npm run multiply 5 2
```
Output: `Multiplied 5 and 2, the result is: 10`

**Error handling example:**
```bash
npm run multiply abc
```
Output: `Something bad happened. Error: Not enough arguments`

### Express Server
Start the web server:
```bash
npm start
```

The server runs on `http://localhost:3003` with the following endpoints:

- **GET /** - Welcome message with available endpoints
- **GET /ping** - Health check endpoint (returns "pong")

**Example API responses:**
```bash
curl http://localhost:3003/
# {"message":"Hello TypeScript Express Server!","endpoints":{"/":"This welcome message","/ping":"Health check endpoint"}}

curl http://localhost:3003/ping
# pong
```

## 📋 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm run ts-node` | Direct ts-node access | Run TypeScript files directly |
| `npm run multiply [a] [b]` | Run multiplier with arguments | Multiply two numbers with validation |
| `npm run calculate` | Run calculator example | Execute calculator with predefined operation |
| `npm start` | Start Express server | Launch web server on port 3003 |

## 🧰 Dependencies

### Production Dependencies
- **express** `^5.1.0` - Fast, unopinionated web framework

### Development Dependencies
- **typescript** `^5.9.3` - TypeScript compiler
- **ts-node** `^10.9.2` - TypeScript execution environment
- **@types/node** `^24.9.1` - Node.js type definitions
- **@types/express** `^5.0.4` - Express type definitions

## ⚙️ Configuration

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

## 🧠 Key TypeScript Features Demonstrated

### 1. Type Safety
```typescript
interface MultiplyValues {
  value1: number;
  value2: number;
}

type Operation = 'multiply' | 'add' | 'divide';
```

### 2. Error Handling
```typescript
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

### 3. Function Signatures
```typescript
const calculator = (a: number, b: number, op: Operation): number => {
  // Implementation with type safety
};
```

## 🌐 API Documentation

### GET /
Returns welcome message and available endpoints.

**Response:**
```json
{
  "message": "Hello TypeScript Express Server!",
  "endpoints": {
    "/": "This welcome message",
    "/ping": "Health check endpoint"
  }
}
```

### GET /ping
Health check endpoint for monitoring server status.

**Response:** `pong`

### 404 Handler
All undefined routes return a structured error response:
```json
{
  "error": "Route not found",
  "message": "The requested endpoint does not exist"
}
```

## 🔧 Development

To extend this project:

1. **Add new TypeScript files** in the root directory
2. **Update scripts** in `package.json` for new functionality
3. **Modify the Express server** in `index.ts` for new endpoints
4. **Run scripts** using `npm run [script-name]`

## 📝 Example Usage Scenarios

### Command Line Tools
```bash
# Valid multiplication
npm run multiply 10 3
# Output: Multiplied 10 and 3, the result is: 30

# Invalid arguments
npm run multiply 5
# Output: Something bad happened. Error: Not enough arguments

# Non-numeric arguments  
npm run multiply abc 123
# Output: Something bad happened. Error: Provided values were not numbers!
```

### Web API
```bash
# Start server
npm start

# Test endpoints in another terminal
curl http://localhost:3003/
curl http://localhost:3003/ping
curl http://localhost:3003/nonexistent  # 404 response
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Based on the [Fullstack Open Part 9](https://fullstackopen.com/en/part9) tutorial
- TypeScript documentation and best practices
- Express.js framework documentation

---

**Happy coding!** 🎉