# ShopSphere-v2

A modern, fully responsive e-commerce platform built with **Next.js** and integrated with **Stripe** for secure payment processing. This platform provides a seamless and intuitive shopping experience, optimized for performance, scalability, and user engagement.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Stripe API Key Setup](#stripe-api-key-setup)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## Overview

This e-commerce platform is a comprehensive solution for businesses looking to establish a strong online presence. Built with Next.js and integrated with Stripe, it offers a robust, scalable, and secure environment for online retail. The platform is designed to provide an exceptional user experience across all devices, from mobile phones to desktop computers.

Key aspects of the platform include:
- A responsive, mobile-first design approach
- Dynamic product listings with detailed product pages
- Secure checkout process (Stripe-ready but not yet implemented)
- User-friendly cart management
- Dark and light mode options for enhanced accessibility
- Efficient search and category navigation

Whether you're a small business owner or a large enterprise, this e-commerce platform can be customized to meet your specific needs, providing a solid foundation for your online store.

## Features

Our e-commerce platform comes packed with features designed to enhance both the shopping experience for customers and the management experience for store owners:

1. **Responsive Design**: 
   - Fully responsive layout that adapts to any screen size
   - Mobile-first approach ensuring smooth performance on smartphones and tablets

2. **Product Management**:
   - Dynamic product listings with pagination
   - Detailed product pages with image galleries, descriptions, and pricing
   - Easy-to-use category and subcategory organization

3. **Shopping Cart**:
   - Real-time cart updates
   - Persistent cart storage using local storage
   - Easy add/remove functionality

4. **Checkout Process**:
   - Stripe-ready integration (requires API key setup)
   - Guest checkout option
   - Order summary and confirmation

5. **User Interface**:
   - Intuitive navigation with a clean, modern design
   - Dark and light mode toggle for user preference
   - Accessibility features for inclusive design

6. **Search Functionality**:
   - Fast, real-time search results
   - Advanced filtering options (price, category, etc.)

7. **Performance**:
   - Server-side rendering for improved SEO and initial load times
   - Optimized images and assets for fast loading

8. **Security**:
   - Secure handling of customer data
   - Integration with Stripe's secure payment processing

## Installation

Follow these steps to set up the e-commerce platform on your local machine:

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/BlueRabbit-ai/ShopSphere-v2.git
cd ShopSphere-v2
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```bash
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-public-key
STRIPE_SECRET_KEY=your-secret-key
```

## Stripe API Key Setup

To enable Stripe payments, follow these steps:

1️⃣ **Sign up or log in to Stripe**
   - Visit [Stripe Dashboard](https://dashboard.stripe.com/register) and create an account.

2️⃣ **Enable Test Mode**
   - Go to the **Stripe Dashboard** and enable **Test Mode** (🔵).

3️⃣ **Get Your API Keys**
   - Navigate to **Developers → API Keys**.
   - Copy the **public (`pk_test_...`)** and **secret (`sk_test_...`)** keys.

4️⃣ **Add Keys to `.env.local`**
   - Paste the keys into your `.env.local` file as shown in the installation step.

## Usage

Once the platform is set up locally, you can start exploring its features:

- **Browse products:** Navigate through different categories and view product details.
- **Add items to cart:** Select products and add them to your shopping cart.
- **Toggle dark/light mode:** Customize your viewing experience.
- **Proceed to checkout:** (Requires Stripe setup)

To start the development server, run:

```bash
npm run dev
```

The platform will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **Next.js** – Framework for building fast, scalable, and server-side-rendered web applications.
- **React** – JavaScript library for building user interfaces.
- **Stripe (Test Mode)** – Payment processing API for secure transactions.
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern design.
- **Node.js** – JavaScript runtime used for backend services.
- **GitHub** – Version control and collaboration platform.

## Contributing

We welcome contributions! If you'd like to contribute, follow these steps:

1. **Fork the repository**
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit changes: `git commit -m 'Add feature'`
5. Push your changes: `git push origin feature/your-feature-name`
6. Open a **Pull Request**

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
