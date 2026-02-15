# Portfolio CMS Backend

A professional Node.js backend API for a CMS-driven portfolio built with Express, MongoDB, and Mongoose.

## Features

✨ **Core Features:**

- **RESTful API** - Clean and organized API structure for portfolio management
- **MongoDB Integration** - Persistent data storage with Mongoose ODM
- **CORS Enabled** - Configured for seamless frontend communication
- **Error Handling** - Comprehensive error handling middleware
- **Project Management** - Create, read, update, delete portfolio projects
- **Blog System** - Full-featured blog management with auto-generated slugs
- **Experience Timeline** - Track professional experience and roles
- **Skills Catalog** - Manage technical skills with categories and proficiency levels
- **Environment Configuration** - Secure .env setup for different environments

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express 5.2.1
- **Database**: MongoDB with Mongoose 8.0.0
- **Config**: dotenv for environment variables
- **CORS**: Express CORS middleware
- **Error Handling**: Express async errors

## Project Structure

```
portfolio-backend/
├── src/
│   ├── config/
│   │   └── database.js           # MongoDB connection setup
│   ├── controllers/
│   │   ├── projectController.js  # Project CRUD operations
│   │   ├── blogController.js     # Blog CRUD operations
│   │   ├── experienceController.js
│   │   └── skillController.js
│   ├── models/
│   │   ├── Project.js            # Project schema
│   │   ├── Blog.js               # Blog schema
│   │   ├── Experience.js         # Experience schema
│   │   └── Skill.js              # Skill schema
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── experienceRoutes.js
│   │   └── skillRoutes.js
│   ├── middleware/
│   │   ├── cors.js               # CORS configuration
│   │   └── errorHandler.js       # Global error handler
│   └── index.js                  # Server entry point
├── .env.example                  # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local instance or MongoDB Atlas connection string)
- npm or yarn

### Installation

1. **Clone and navigate to project:**

   ```bash
   cd portfolio-backend
   npm install
   ```

2. **Setup environment variables:**

   ```bash
   cp .env.example .env
   ```

3. **Configure .env file:**
   ```dotenv
   MONGODB_URI=mongodb://localhost:27017/portfolio-cms
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3001
   ```

### Development

Start the development server with auto-reload:

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### Production

```bash
npm start
```

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

**Query Params:**

- `status` - Filter by status (draft/published/archived)
- `featured` - Filter featured projects (true/false)

### Blogs

- `GET /api/blogs` - Get all blogs (paginated)
- `GET /api/blogs/slug/:slug` - Get blog by slug
- `GET /api/blogs/:id` - Get blog by ID
- `POST /api/blogs` - Create blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

**Query Params:**

- `status` - Filter by status (draft/published/archived)
- `category` - Filter by category
- `page` - Pagination page (default: 1)
- `limit` - Items per page (default: 10)

### Experience

- `GET /api/experience` - Get all experience entries
- `GET /api/experience/:id` - Get experience by ID
- `POST /api/experience` - Create experience (admin)
- `PUT /api/experience/:id` - Update experience (admin)
- `DELETE /api/experience/:id` - Delete experience (admin)

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/categories` - Get skill categories
- `GET /api/skills/:id` - Get skill by ID
- `POST /api/skills` - Create skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)

**Query Params:**

- `category` - Filter by category
- `featured` - Filter featured skills (true/false)

## Response Format

All API responses follow a consistent format:

**Success Response:**

```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response:**

```json
{
  "success": false,
  "error": {
    "status": 404,
    "message": "Resource not found"
  }
}
```

## Database Models

### Project

```javascript
{
  title: String (required),
  description: String (required),
  shortDescription: String,
  technologies: [String],
  image: String (required),
  github: String,
  demo: String,
  featured: Boolean,
  order: Number,
  status: String (draft/published/archived),
  timestamps: true
}
```

### Blog

```javascript
{
  title: String (required),
  slug: String (auto-generated),
  excerpt: String (required),
  content: String (required),
  author: String,
  category: String (required),
  tags: [String],
  image: String,
  readTime: Number,
  published: Boolean,
  views: Number,
  status: String (draft/published/archived),
  timestamps: true
}
```

### Experience

```javascript
{
  title: String (required),
  company: String (required),
  location: String,
  startDate: Date (required),
  endDate: Date,
  isCurrentRole: Boolean,
  description: String,
  responsibilities: [String],
  skills: [String],
  order: Number,
  timestamps: true
}
```

### Skill

```javascript
{
  name: String (required),
  category: String (required),
  proficiency: String (Beginner/Intermediate/Advanced/Expert),
  level: Number (0-100),
  experience: Number (years),
  featured: Boolean,
  order: Number,
  timestamps: true
}
```

## Environment Variables

Create a `.env` file in the root directory:

```dotenv
# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio-cms
MONGODB_URI_PRODUCTION=mongodb+srv://user:pass@cluster.mongodb.net/portfolio-cms

# Server
PORT=5000
NODE_ENV=development

# Frontend
FRONTEND_URL=http://localhost:3001

# JWT (optional for future auth)
JWT_SECRET=your_secret_key

# Rate Limiting (optional)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Future Enhancements

- [ ] JWT Authentication for admin routes
- [ ] Role-based access control (RBAC)
- [ ] Image upload and CDN integration
- [ ] Contact form submissions storage
- [ ] Search and filtering optimization
- [ ] API rate limiting
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Caching with Redis

## Deployment

### Deploy to Heroku

1. Install Heroku CLI and login
2. Create Heroku app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set KEY=value`
4. Deploy: `git push heroku main`

### Deploy to Railway / Render / DigitalOcean

Similar process with their respective CLI tools and configurations.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue in the repository.

---

**Backend API Ready! 🚀**
