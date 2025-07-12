# Mini SaaS Dashboard

A mini SaaS dashboard built with Next.js, Clerk, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm

### Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd mini-saas-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Clerk credentials. You can get these from your Clerk dashboard.

    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
    CLERK_SECRET_KEY=sk_...

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Tech Stack & Decisions

- **Framework**: [Next.js](https://nextjs.org/) (App Router) was chosen for its robust features for building production-ready React applications, including server-side rendering, static site generation, and a powerful routing system.
- **Authentication**: [Clerk](https://clerk.com/) is used for user management and authentication. This was a trade-off to simplify the development process by using a managed service, rather than building a custom authentication solution from scratch.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) is used for utility-first styling. This allows for rapid UI development and easy maintenance.
- **Charting**: [Recharts](https://recharts.org/) is used for creating charts and visualizations in the dashboard. It was chosen for its simplicity and good React integration.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) provides a convenient way to include a wide variety of icons.
