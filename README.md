# Budget Tracker Application

## 📝 Project Description

Budget Tracker Application is a user-friendly platform that helps users track their income and expenses, effectively managing their budget. It offers a modern interface and is optimized for both desktop and mobile devices. Key features include:

- **Add Income and Expenses**: Users can log their income and expenses by category.
- **Graphical Visualization**: Income and expenses are displayed as side-by-side pie charts for clarity.
- **Dark Mode Support**: Users can toggle between light and dark modes for a personalized experience.
- **State Management with Redux**: All data is managed via Redux and stored in localStorage.

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

## 🌟 Features

- **Dark Mode Support**: Seamless light and dark theme toggle with smooth transitions.
- **Budget Tracking**: Add, edit, and delete income and expense entries.
- **Category-Based Expense Visualization**: Visualize expenses by category using Pie Charts.
- **Local Storage Integration**: Save and persist budget data in local storage.
- **Responsive Design**: Fully responsive layout for both desktop and mobile views.
- **Redux State Management**: Centralized and efficient state management with Redux.
- **User-Friendly UI**: Intuitive interface built with Tailwind CSS.

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