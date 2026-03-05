blogr/
│
├── client/ # React + TypeScript + Sass
│ ├── public/
│ │ └── assets/
│ │ ├── images/
│ │ └── icons/
│ │
│ ├── src/
│ │ ├── assets/ # Static assets
│ │ │
│ │ ├── components/ # Reusable UI components
│ │ │ ├── common/
│ │ │ │ ├── Navbar/
│ │ │ │ │ ├── Navbar.tsx
│ │ │ │ │ ├── Navbar.module.scss
│ │ │ │ │ └── DropdownMenu.tsx
│ │ │ │ ├── Footer/
│ │ │ │ ├── Button/
│ │ │ │ └── ProtectedRoute/
│ │ │ │
│ │ │ └── ui/ # Small reusable elements
│ │ │ ├── Input/
│ │ │ ├── Modal/
│ │ │ └── Spinner/
│ │ │
│ │ ├── pages/ # كل صفحة ليها folder
│ │ │ ├── Home/
│ │ │ │ ├── Home.tsx
│ │ │ │ ├── Home.module.scss
│ │ │ │ └── sections/
│ │ │ │ ├── Hero.tsx
│ │ │ │ ├── Features.tsx
│ │ │ │ └── Infrastructure.tsx
│ │ │ │
│ │ │ ├── Pricing/
│ │ │ ├── Blog/
│ │ │ ├── About/
│ │ │ ├── Contact/
| | | |── marketplace/
| | | ├── features/
| | | ├── integrations/
| | | ├── team/
| | | ├── blogPost/
| | | ├── careers/
| | | ├── contact/
| | | ├── newsletter/
│ │ │ ├── Dashboard/ # للـ Author بعد Login
│ │ │ │ ├── Dashboard.tsx
│ │ │ │ └── sections/
│ │ │ │ ├── MyPosts.tsx
│ │ │ │ └── Settings.tsx
│ │ │ │
│ │ │ ├── Auth/
│ │ │ │ ├── Login.tsx
│ │ │ │ └── Register.tsx
│ │ │ │
│ │ │ └── NotFound/
│ │ │
│ │ ├── context/ # React Context API
│ │ │ ├── AuthContext.tsx # JWT + Refresh Token
│ │ │ └── SubscriptionContext.tsx # Plan + Permissions
│ │ │
│ │ ├── hooks/ # Custom Hooks
│ │ │ ├── useAuth.ts
│ │ │ ├── useAxios.ts # Axios interceptors
│ │ │ └── useSubscription.ts
│ │ │
│ │ ├── services/ # API calls
│ │ │ ├── api.ts # Axios instance
│ │ │ ├── authService.ts
│ │ │ ├── blogService.ts
│ │ │ ├── contactService.ts
│ │ │ └── newsletterService.ts
│ │ │
│ │ ├── types/ # TypeScript interfaces
│ │ │ ├── auth.types.ts
│ │ │ ├── blog.types.ts
│ │ │ └── subscription.types.ts
│ │ │
│ │ ├── utils/ # Helper functions
│ │ │ ├── formatDate.ts
│ │ │ └── permissions.ts # Subscription permissions logic
│ │ │
│ │ ├── styles/ # Global Sass styles
│ │ │ ├── \_variables.scss
│ │ │ ├── \_mixins.scss
│ │ │ ├── \_reset.scss
│ │ │ └── main.scss
│ │ │
│ │ ├── router/
│ │ │ └── AppRouter.tsx # كل الـ routes هنا
│ │ │
│ │ ├── App.tsx
│ │ └── main.tsx
│ │
│ ├── tsconfig.json
│ ├── vite.config.ts
│ └── package.json
│
│
├── server/ # Express + TypeScript + Mongoose
│ ├── src/
│ │ ├── config/
│ │ │ ├── db.ts # MongoDB connection
│ │ │ └── env.ts # Environment variables
│ │ │
│ │ ├── models/ # Mongoose Models
│ │ │ ├── User.model.ts
│ │ │ ├── Post.model.ts
│ │ │ ├── Plan.model.ts # Subscription plans
│ │ │ └── Message.model.ts # Contact form
│ │ │
│ │ ├── controllers/
│ │ │ ├── auth.controller.ts
│ │ │ ├── blog.controller.ts
│ │ │ ├── contact.controller.ts
│ │ │ └── newsletter.controller.ts
│ │ │
│ │ ├── routes/
│ │ │ ├── auth.routes.ts
│ │ │ ├── blog.routes.ts
│ │ │ ├── contact.routes.ts
│ │ │ └── newsletter.routes.ts
│ │ │
│ │ ├── middleware/
│ │ │ ├── auth.middleware.ts # JWT verification
│ │ │ ├── refresh.middleware.ts # Refresh Token logic
│ │ │ └── checkPlan.middleware.ts # Subscription permissions
│ │ │
│ │ ├── utils/
│ │ │ ├── generateTokens.ts
│ │ │ └── ApiError.ts # Custom error handler
│ │ │
│ │ └── app.ts # Express app setup
│ │
│ ├── tsconfig.json
│ └── package.json
│
├── .gitignore
└── README.md
