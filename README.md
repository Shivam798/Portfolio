# Your Portfolio Project

Welcome to my portfolio project! This repository contains the code for my personal portfolio website.

## Getting Started

To run this project locally, follow the steps below:

### 1. EmailJS Account Setup

Before you start, you'll need to create an account on [EmailJS](https://www.emailjs.com/) and obtain the necessary API keys:

- **Service Key:** Obtain your EmailJS Service Key.
- **Template Key:** Obtain the key for the email template you'd like to use.
- **Public Key:** Retrieve your EmailJS Public Key.

### 2. Configuration

In the root directory of the project, create a `.env.local` file and add the following environment variables with your EmailJS keys:

```env
NEXT_PUBLIC_SERVICE_KEY=your_service_key
NEXT_PUBLIC_TEMPLATE_KEY=your_template_key
NEXT_PUBLIC_EMAILJS_KEY=your_public_key
```

### 3. Install Dependencies

Run the following command to install the project dependencies:

```
npm install
```
### 4. Run the Project

Now, you can start the development server with the following command:

```
npm run dev
```
