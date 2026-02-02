```bash
npm install

cp .env.example .env
```

Configure .env :

```bash
PORT=5001
NODE_ENV=development
DB_HOST=localhost
DB_USER=your_local_db_user
DB_PASSWORD=your_local_db_password
DB_NAME=dms_db
DB_PORT=3306
```

Run Migrations :

```bash
npm run migration:run
```

Start NestJs server :

```bash
npm run dev
```

NestJs should be available at :

```bash
http://localhost:5001
```

Expected logs :

```bash
✅ Database connected
🚀 Server running on port 5001
```
