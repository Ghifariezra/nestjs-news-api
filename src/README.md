# 📰 NestJS News API

A RESTful API built with [NestJS](https://nestjs.com/) for managing and retrieving news articles, categories, and headlines.  
Includes user authentication, category-based search, and Swagger documentation.

## 🚀 Features

- 🧾 Register & Login (Basic Auth with hashed passwords)
- 🔐 JWT Authentication (secured endpoints)
- 🔎 Filter by category and limit
- 📄 Swagger API docs (`/api/docs`)
- 🛠️ Built with NestJS, Prisma, PostgreSQL

## 🛠️ Tech Stack

- **Backend**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Authentication**: JWT + Basic Auth
- **Docs**: Swagger (OpenAPI)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nestjs-news-api.git
cd nestjs-news-api

# Install dependencies using pnpm
pnpm install

# Create `.env` file
cp .env.example .env
