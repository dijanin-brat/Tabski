# Tabski

In this file you can see instructions dor running this Node.js app (node version used during development 18.16.1).

1. Create new postgres database named 'tabski' with default settings (in pgAdmin4 or something similar).

2. Open terminal 

3. Make sure you are in the positioned project directory you downloaded from GitHub named 'Tabski'

4. Run npm install in terminal

5. Run migrations
    Use this command: npx sequelize-cli db:migrate

6. Run seeders
    Use this command: npx sequelize-cli db:seed:all

7. Run the app
    Nodemone (used for easier developing): npm run dev
    Regular start: npm run start
