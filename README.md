# Youth Computing Research Journal (YCRJ)

A professional, academic web platform built for the **Youth Computing Research Journal (YCRJ)**. This platform serves as a central hub for student researchers, featuring comprehensive information about the program phases, journal archives, and direct application portals.

Designed with a premium aesthetic—focusing on dark navy, gold accents, and high-quality typography—the site presents an institutional and credible face for the initiative.

## Key Features

- **Program Details**: Interactive breakdown of the YCRJ phases and structure.
- **Journal Archives**: Showcase of past research journals and publications.
- **Application Portal**: Integrated application forms for prospective students and peer reviewers.
- **Team & Governance**: Detailed views of the editorial board and team structure.

## Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/On3Human/YCRJ.git
   cd YCRJ
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port specified in your terminal).

## 📂 Project Structure

```text
YCRJ/
├── public/              # Static assets and redirects
├── src/
│   ├── components/      # Reusable UI components (Layout, Navbar, etc.)
│   ├── pages/           # Page-level components (Home, Program, Apply, etc.)
│   ├── index.css        # Global styles and Tailwind configuration
│   ├── App.jsx          # Main application routing
│   └── main.jsx         # React application entry point
├── eslint.config.js     # Linter configuration
├── vite.config.js       # Vite bundler configuration
└── package.json         # Project dependencies and scripts
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Bootstraps a local server to preview the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.
