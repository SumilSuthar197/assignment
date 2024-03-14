## Assignment Overview

This project revolves around crafting a seamless checkout process, focusing specifically on the final stages: the Checkout Page, Payment Options Page, and Order Confirmation Page. Let's delve into the details of each section:

### Checkout Page
- Fetch order details and payment methods from [this API](https://groww-intern-assignment.vercel.app/v1/api/order-details).
- Display order summary and a call-to-action button to proceed.
- Handle empty product list scenarios.
- Ensure responsiveness for multiple screen sizes.

### Payment Options Page
- Design a page for users to choose their preferred payment method.
- Render payment methods provided in the order-details API.
- Implement validation and error handling for payment instruments.

### Order Confirmation Page
- Create a page to confirm the order.
- Display order details, selected payment method, and transaction status (Success, Failure, Pending).
- Ensure responsive design and dynamic UI.

## Additional Feature

In addition to the core requirements, I've implemented an dynamic theming feature based on various brands. This feature allows for a unique visual experience tailored to different brand aesthetics. Themes are fetched dynamically using [this API](https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata).

## Tech Stack

- Next.js
- JavaScript
- Redux

## Get Started

To get started with the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/SumilSuthar197/assignment.git`
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

The application should now be running on [https://localhost:3000](http://localhost:3000/).
