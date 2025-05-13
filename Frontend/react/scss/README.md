# React SCSS Template

A modern, production-ready React template with SCSS styling support.

## Features

- React with SCSS styling
- Responsive layout
- Routing with React Router
- API client with Axios
- Bootstrap integration (optional)
- Clean folder structure
- Component organization

## Directory Structure

```
├── public/             # Static files
├── src/
│   ├── components/     # Reusable components
│   ├── Layout/         # Layout components
│   ├── Pages/          # Page components
│   ├── services/       # API services
│   │   └── apiClient.js # Axios API client
│   ├── scss/           # SCSS files
│   │   ├── base/       # Base styles, variables, mixins
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   └── _variables.scss
│   │   ├── components/ # Component-specific styles
│   │   ├── layouts/    # Layout styles
│   │   ├── pages/      # Page-specific styles
│   │   └── main.scss   # Main SCSS file
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
├── .gitignore          # Git ignore file
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Getting Started

1. Clone this template
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Build for production:
   ```
   npm run build
   ```

## Styling with SCSS

This template uses SCSS for styling with a modular approach:

- `src/scss/base/` - Contains variables, mixins, and reset styles
- `src/scss/components/` - Component-specific styles
- `src/scss/layouts/` - Layout styles
- `src/scss/pages/` - Page-specific styles
- `src/scss/main.scss` - Imports all SCSS files

### Key SCSS Variables

```scss
// Colors
$primary-color: #007bff;
$secondary-color: #6c757d;
$success-color: #28a745;
$danger-color: #dc3545;
$warning-color: #ffc107;
$info-color: #17a2b8;
$light-color: #f8f9fa;
$dark-color: #343a40;

// Breakpoints
$breakpoints: (
  mobile: 0,
  tablet: 768px,
  desktop: 992px,
  large-desktop: 1200px
);
```

## API Integration

The template includes a basic API client setup in `src/services/apiClient.js` using Axios:

```javascript
// Example API call
import { publicClient } from '../services/apiClient';

const fetchData = async () => {
  try {
    const response = await publicClient.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```

## Routing

The template uses React Router for navigation:

```jsx
<Router>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  </Layout>
</Router>
```

## Adding New Pages

1. Create a new Page in the `src/Pages/` directory
2. Add styles in `src/scss/pages/`
3. Add a route in `App.js`
