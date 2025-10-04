
 # Mane Event

This is the team repository for Team 1

## Project

A website to allow users to connect, schedule, pay, rate and curate a tailored beauty team.

**_End users_** create accounts, allowing them to gain access to services provided by beauty specialists, makeup artists, hairdressers, nail technicians, or just a really great barber whose name they can never seem to remember.
**Features**

- Request appointments
- Generate reminders
- Get discounts
- Rate services
- Share references

---

**_Service providers_** create accounts, allowing them to build a platform to connect with end users for services provided.

**Features**

- Schedule appointments
- Generate reminders
- Send discounts
- Rate members
- Send references

---

### Project Name

Mane Event

### Project Description

Mane Event is a web app that connects customers with beauty professionals (stylists, barbers, nail techs, makeup artists). Customers can discover services, see real-time availability, book appointments, pay securely, and leave ratings. Providers can publish profiles, list services and pricing, manage schedules, and receive bookings in one place.

### Project Scope

* Scope Statement (MVP) (example)
* In Scope (MVP):
* Accounts with email verification (Customer/Provider/Admin)
* Provider profiles (photo, bio, services, pricing)
* Service search with basic filters
* Availability & scheduling (no double-booking)
* Booking cart → checkout → payment → confirmation
* Appointments history (view/update/cancel within policy)
* Basic provider console (manage services/availability)
* Basic admin view (users, providers, services, bookings)
* Email confirmations

## Team

### 495 Students - Project Managers

- **Brian French**
- **Fabian Abarca**

### 394 Students - Lead Developers

- **John Phan**

### 294 Students - Junior Developers

- **Ava Rose**
- **Liam Hansen**

## Prerequisites

**IDE** [Visual Studio Code](https://code.visualstudio.com/download)
|**Front End**|**Back End**|**Frame work**|
|-|-|-|
|![React](https://img.shields.io/badge/React-white?logo=react) ![tailwind](https://img.shields.io/badge/tailwindcss-white?logo=tailwindcss)|![Node.js](https://img.shields.io/badge/Node.js-white?logo=node.js) ![Supabase](https://img.shields.io/badge/Supabase-white?logo=Supabase)
|![vite](https://img.shields.io/badge/vite-white?logo=vite)|

---

## Get Started

### 1) Software Setup

**a. Install Visual Studio Code [Here](https://code.visualstudio.com/download)**
- Download and install VS Code. Open it when done.

**b. Install Node.js [Here](https://www.nodejs.org) (includes Node's Package Manager (npm))**
- Download and install Node.js. Accept the defaults. 

**c. Restart VS Code**
- Close and reopen VS Code so it picks up Node/npm.

**d. Optional: To verify Node/npm was installed correctly.**
- In VS Code, go to Terminal → New Terminal, then run:
  
node -v

npm -v

- You should see version numbers (e.g., v22.x, 10.x/11.x).
<br>

### 2. Get the Project Code

**e. Clone the team repository**
- In VS Code press Ctrl+Shift+P → type "Git: Clone" → Enter.
- Paste the repository URL: https://github.com/FranklinUniversityCompSciPracticum/Fall_2025_Team1_Repo.git
- Choose a folder (e.g., Documents or dev).
- When VS Code asks, click Open to open the cloned folder.
<br>

### 3. Install & Run the App

**f. Install project dependencies (inside the app folder)**
- In the VS Code terminal run these commands:
  
cd Fall_2025_Team1_Repo

cd ManeEvent

npm install

- This downloads everything the app needs (React, Vite, TailwindCSS, etc.).
  
**g. Start the dev server.**
- In the VS Code terminal run the command in the ManeEvent folder:

npm run dev

- Click the link that appears in the terminal (usually http://localhost:5173).
- You should see the Main Event landing page with Login and Join. 

--- 
## Extensions and Dependencies

Recommended Extensions for VSCODE (all the necessary extensions should be added to the project when you run the command "npm install"):

- React Native Tools- Microsoft
- VS Code ESLint extension- Microsoft
- Tailwind CSS IntelliSense- tailwindcss
- JavaScript and TypeScript Nightly - Microsoft
- Prettier - Code formatter - prettier.io

devDependencies/ Versions (These versions work well with each other):
- Vscode: v1.104.1
- node.js: v22.14.0
- npm: v11.6.0
- npx: v11.6.0 - installed with npm
- js: 9.33.0
- react: 19.0.0
- tailwindcss: 3.4.17,
- vite: 7.1.2

If something goes wrong with React installation, you can also download the newest version:
Follow install for React [Here](https://react.dev/learn/editor-setup)

## Supabase Credentials

VITE_SUPABASE_URL=https://iymuizxrloixssfaueyp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bXVpenhybG9peHNzZmF1ZXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTczMjEsImV4cCI6MjA3MzE3MzMyMX0.Ky_SoQbkGwbsEto7GSsVVJMQUJ7gl9hb60vevdsU8w8
