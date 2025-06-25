import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// import Services from './pages/Services.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';

import ServicesIndex from "./pages/services/Index.jsx";
import ServiceCategory from "./pages/services/ServiceCategory.jsx";
import ServiceDetail from "./pages/services/ServiceDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <ServicesIndex /> },
      { path: "/services/:categorySlug", element: <ServiceCategory /> },
      {
        path: "/services/:categorySlug/:serviceSlug",
        element: <ServiceDetail />,
      }, // Step 3
      { path: "/faqs", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </StrictMode>,
)
