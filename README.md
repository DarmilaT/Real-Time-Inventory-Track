# Real-Time Inventory Management System  

A web application built with **React** and **Firebase** for efficient and real-time product and inventory management. The system supports role-based access for Admins, Managers, Sales Representatives, and Shops, providing tailored functionality for each user type.  


## Features  

### General Features  
- **Real-Time Updates**: Powered by Firebase for instant synchronization of inventory and sales data.  
- **Responsive Design**: Optimized for various devices for a seamless user experience.  

### User Roles and Access  
1. **Admin**  
   - Add, edit, and delete products and categories.  
   - Manage initial inventory and incoming stock.  
   - View and manage all invoices (sales and purchase).  
2. **Manager**  
   - Add incoming stock and maintain inventory.  
   - Allocate products to Sales Representatives and Shops with specific quantities and price ranges.  
   - Manage purchase invoices.  
3. **Sales Representative**  
   - View allocated products and create sales invoices.  
   - Manage and process customer billing.  
4. **Shops**  
   - Similar functionality to Sales Representatives, focused on shop-level sales.  


## Tech Stack  

- **Frontend**:  
  - React  
  - React Router (for navigation)  
  - Shadcn/Tailwindcss (optional for styling)  

- **Backend**:  
  - Firebase Authentication (for secure login and signup)  
  - Firestore Database (for real-time data storage and retrieval)  
  - Firebase Hosting (for app deployment)  