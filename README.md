# Budget Tracker Application

## 📝 Project Description

The **Budget Tracker Application** is a user-friendly platform designed to help users effectively manage their income and expenses. It offers modern features for tracking, analyzing, and visualizing budgets. The application is optimized for both desktop and mobile devices, ensuring accessibility and ease of use.

---

## 🌟 Features

- **Add Income and Expenses**: Log income and expenses by category with detailed tracking.
- **Graphical Visualization**: View income vs. expenses and expense categories as interactive pie charts.
- **Monthly and Yearly Filters**: Filter data by month and year, with navigation for switching between periods.
- **Local Storage Integration**: Save and persist budget data in local storage.
- **Spending Limit Alerts**: Set monthly and yearly spending limits for expense categories, with alerts when 80% of a limit is reached.
- **Dark Mode Support**: Toggle between light and dark modes for a personalized experience.
- **State Management with Redux**: Centralized and efficient state management with persistence in local storage.
- **Responsive Design**: Fully optimized for all screen sizes, from mobile to desktop.
- **User-Friendly UI**: Intuitive and visually appealing interface built with Tailwind CSS.

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/budget-tracker.git
cd budget-tracker
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Application

To start the application in development mode:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000.

## 📦 Installed Packages
The project uses the following key packages:

- React and Next.js: For building the application.
- Tailwind CSS: For fast and modern styling.
- Redux Toolkit: For state management.
- Recharts: For displaying income and expense graphs.
- date-fns: For handling date formatting.
- Custom Fonts: Geist Sans and Geist Mono for typography.

Refer to the package.json file for the complete list of dependencies.


## 🛠 Project Structure
The directory structure is as follows:

```bash
budget-tracker/
├── public/            # Static files (icons, fonts, etc.)
├── src/
│   ├── app/           # Next.js pages and main components
│   ├── components/    # Reusable components
│   ├── store/         # Redux store and slices
│   ├── styles/        # CSS and Tailwind configurations
├── .gitignore         # Files and directories ignored by Git
├── README.md          # Project description (this file)
├── package.json       # Dependencies and scripts
└── next.config.js     # Next.js configuration
```
