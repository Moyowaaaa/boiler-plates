# Node.js + Express + TypeScript API Boilerplate

A comprehensive, production-ready Node.js API boilerplate with Express, TypeScript, MongoDB, and enterprise-grade features. This template provides a solid foundation for building scalable RESTful APIs with best practices built-in.

## ✨ Features

- 🏗️ **Express.js 5** with TypeScript support
- 🗄️ **MongoDB** integration with Mongoose ODM
- 📚 **Swagger** API documentation with interactive UI
- 🔐 **JWT Authentication** with bcrypt password hashing
- 🛡️ **Security middleware** (CORS, rate limiting, helmet)
- 📧 **Email services** with Resend integration
- 🖼️ **File uploads** with Multer and Cloudinary
- 📊 **Request logging** with Morgan and Winston
- ⚡ **Redis caching** support with ioredis
- 🔍 **Input validation** with validator
- 🚦 **Error handling** and logging middleware
- 📝 **Environment configuration** with dotenv
- 🧪 **Development tools** with nodemon and husky

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Redis (optional, for caching)
- Yarn or npm

### Installation

1. **Clone and navigate to the project:**
```bash
cd node-express-typescript
```

2. **Install dependencies:**
```bash
yarn install
# or
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server:**
```bash
yarn dev
# or
npm run dev
```

5. **Access API documentation:**
Navigate to [http://localhost:8081/api-docs](http://localhost:8081/api-docs)

## 📁 Project Structure

```
node-express-typescript/
├── src/
│   ├── controller/          # Route controllers
│   │   └── hero.controller.ts
│   ├── db/                 # Database connections
│   │   └── db.ts
│   ├── interfaces/         # TypeScript interfaces
│   │   ├── hero.interface.ts
│   │   └── user.interface.ts
│   ├── middleware/         # Custom middleware
│   │   ├── ErrorLogger.ts
│   │   └── auth.middleware.ts
│   ├── models/             # Mongoose schemas
│   │   ├── hero.model.ts
│   │   └── user.model.ts
│   ├── routes/             # API routes
│   │   ├── hero.routes.ts
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── swagger.ts
│   └── server.ts           # Application entry point
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── nodemon.json            # Nodemon configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── yarn.lock               # Yarn lock file
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Compile TypeScript to JavaScript |
| `yarn start` | Start production server |
| `yarn test` | Run test suite (when configured) |

## ⚙️ Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=8081
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/your-database-name

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Redis (Optional)
REDIS_URL=redis://localhost:6379

# Email Services
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=noreply@yourdomain.com

# Cloudinary (for file uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

### Database Setup

#### MongoDB Local
```bash
# Start MongoDB
mongod

# Create database (optional - MongoDB creates automatically)
use your-database-name
```

#### MongoDB Atlas
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env` file

## 🔧 API Development

### Creating New Routes

1. **Create a controller:**
```typescript
// src/controller/user.controller.ts
import { Request, Response } from 'express'

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Your logic here
    res.json({ message: 'Users fetched successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
```

2. **Create routes:**
```typescript
// src/routes/user.routes.ts
import { Router } from 'express'
import { getUsers } from '../controller/user.controller'

const router = Router()

router.get('/users', getUsers)

export default router
```

3. **Register in main routes:**
```typescript
// src/routes/index.ts
import userRoutes from './user.routes'

router.use('/api', userRoutes)
```

### Database Models

```typescript
// src/models/user.model.ts
import mongoose, { Document, Schema } from 'mongoose'

interface IUser extends Document {
  name: string
  email: string
  password: string
  createdAt: Date
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true
})

export default mongoose.model<IUser>('User', userSchema)
```

### Middleware

```typescript
// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface AuthRequest extends Request {
  user?: any
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' })
    req.user = user
    next()
  })
}
```

## 📚 API Documentation

### Swagger Integration

This boilerplate includes Swagger for automatic API documentation:

1. **Configure Swagger:**
```typescript
// src/utils/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:8081',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to route files
}

const specs = swaggerJsdoc(options)
export default specs
```

2. **Add Swagger comments:**
```typescript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', getUsers)
```

3. **Access documentation:**
Visit [http://localhost:8081/api-docs](http://localhost:8081/api-docs)

## 🔐 Authentication

### JWT Implementation

```typescript
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Generate JWT token
const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  })
}

// Hash password
const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 12)
}

// Compare password
const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword)
}
```

### Protected Routes

```typescript
router.post('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', user: req.user })
})
```

## 📧 Email Services

### Resend Integration

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to,
      subject,
      html,
    })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}
```

## 🖼️ File Uploads

### Multer + Cloudinary

```typescript
import multer from 'multer'
import cloudinary from 'cloudinary'

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Multer configuration
const storage = multer.memoryStorage()
const upload = multer({ storage })

// Upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    const result = await cloudinary.v2.uploader.upload_stream({
      resource_type: 'auto',
    }, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Upload failed' })
      }
      res.json({ url: result?.secure_url })
    }).end(req.file.buffer)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})
```

## 📊 Error Handling

### Global Error Handler

```typescript
// src/middleware/ErrorLogger.ts
import { Request, Response, NextFunction } from 'express'

export interface CustomError extends Error {
  statusCode?: number
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  console.error(`[${new Date().toISOString()}] ${req.method} ${req.path}: ${err.message}`)

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}
```

## 🚀 Deployment

### Production Setup

1. **Build the application:**
```bash
yarn build
```

2. **Set production environment variables:**
```env
NODE_ENV=production
PORT=8081
MONGO_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
```

3. **Start production server:**
```bash
yarn start
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install --production

COPY . .
RUN yarn build

EXPOSE 8081

CMD ["yarn", "start"]
```

### PM2 Process Manager

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start src/server.ts --name "api-server"

# Monitor
pm2 monit

# Logs
pm2 logs
```

## 🧪 Testing

### Setting up Tests

```bash
# Install testing dependencies
yarn add -D jest @types/jest supertest @types/supertest

# Create test file
touch src/tests/user.test.ts
```

### Example Test

```typescript
// src/tests/user.test.ts
import request from 'supertest'
import app from '../server'

describe('User API', () => {
  test('GET /api/users should return users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200)
    
    expect(response.body).toHaveProperty('message')
  })
})
```

## 📈 Performance & Monitoring

### Redis Caching

```typescript
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

// Cache middleware
export const cache = (duration: number) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = req.originalUrl
    
    try {
      const cached = await redis.get(key)
      if (cached) {
        return res.json(JSON.parse(cached))
      }
      
      // Override res.json to cache response
      const originalJson = res.json
      res.json = function(data) {
        redis.setex(key, duration, JSON.stringify(data))
        return originalJson.call(this, data)
      }
      
      next()
    } catch (error) {
      next()
    }
  }
}
```

### Request Logging

```typescript
import morgan from 'morgan'
import winston from 'winston'

// Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

// Morgan middleware
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }))
```

## 🔒 Security Best Practices

- **Helmet:** Security headers
- **Rate Limiting:** Prevent abuse
- **Input Validation:** Sanitize all inputs
- **Password Hashing:** bcrypt for secure passwords
- **JWT:** Secure token-based authentication
- **CORS:** Proper cross-origin configuration
- **Environment Variables:** Never expose secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Common Issues

### Database Connection Error
```bash
# Check MongoDB is running
mongod --version

# Verify connection string
echo $MONGO_URI
```

### Port Already in Use
```bash
# Kill process on port 8081
npx kill-port 8081

# Or use different port
PORT=3002 yarn dev
```

### TypeScript Compilation Errors
```bash
# Check TypeScript version
npx tsc --version

# Rebuild
rm -rf dist/
yarn build
```

---

**Built with ❤️ using Node.js, Express, TypeScript, and MongoDB**
