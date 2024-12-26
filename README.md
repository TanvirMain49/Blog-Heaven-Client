# Blog Heaven

Welcome to the Blog Heaven Development Project! This project showcases a fully functional, dynamic, and responsive blog platform built with modern web development technologies like React, Firebase, and MongoDB.

## Live Link
[Visit the Live Website](https://blog-website-7a80f.web.app/)

---

## Key Features

### General Features
- A beautiful and responsive design with proper alignment and color contrast.
- Fully secured Firebase configuration using environment variables.
- MongoDB credentials secured via environment variables.
- Dynamic routing for seamless navigation.
- Error-free deployment with proper authorization setup.

### Home Page
- Includes:
  - Header (Simple Navbar)
  - Banner (Hero Section)
  - Recent Blog Posts Section (Displays six blogs with details and wishlist buttons).
  - Newsletter Section (Toast message on submission).
  - Two additional custom sections for uniqueness.
- Utilized **Framer Motion** for smooth animations on the home page.

### All Blogs Page
- Displays all blogs added by users.
- Features:
  - Blogs can be filtered by category.
  - **Search Option:** Users can search blogs by title using the search bar.
  - Each blog includes a title, image, short description, category, details button, and wishlist button.
- Backend supports MongoDB text search for efficient searching.

### Blog Details Page
- Shows detailed information about a blog.
- Features:
  - Comment section with user name and profile picture.
  - Conditional rendering for commenting and updating functionality.

### Add Blog Page
- A form to add new blogs with fields for title, image URL, category (dropdown), short description, and long description.

### Update Blog Page
- Allows logged-in users to update their blogs.
- Auto-fills form fields with the blog's current information for easy editing.

### Featured Blogs Page
- Displays a table of the top 10 blogs based on the word count of the long description.
- Features sortable columns using **React Data Table**.

### Wishlist Page
- Displays blogs wishlisted by the logged-in user.
- Features:
  - Details button.
  - Remove wishlist button.

### Authentication System
- Email and password-based authentication using Firebase.
- Additional login option via Google.
- Secure private routes with JWT authentication.
- Registration page includes validations for password strength.

### 404 Page
- A custom-designed page for non-existent routes.

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **React Router**: For dynamic routing.
- **Tailwind CSS**: For styling.
- **React Icons**: For icons.
- **Framer Motion**: For animations.
- **React Data Table**: For the sortable and responsive table in the Featured Blogs Page.

### Backend
- **Node.js & Express**: For server-side operations.
- **MongoDB**: For database management with secure credentials.

### Other Tools
- **Toastify**: For displaying toast messages.
- **Environment Variables**: For securing API keys and credentials.

---


Thank you for exploring the Blog Website Development Project! Enjoy the seamless experience crafted with care and modern technology.

