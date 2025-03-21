# Landing Page with Video and Form Submission

This is a responsive landing page built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It features a promotional video with play/pause functionality, smooth scrolling to a form section, and form validation before submission.

## Features
- **Landing Page**: A clean and modern UI for promoting a product or service.
- **Video Player**: A promotional video with play/pause functionality.
- **Form Submission**: User input form with validation and submission handling.
- **Smooth Scroll**: Scrolls to the form section when the "Join Now" button is clicked.
- **Animations**: Uses Framer Motion for smooth transitions and effects.
- **Responsive Design**: Fully responsive and optimized for different screen sizes.

## Technologies Used
- **Next.js** – Framework for React applications
- **TypeScript** – Ensures type safety
- **Tailwind CSS** – For styling
- **Framer Motion** – For animations
- **Firebase** – (If applicable) For backend services

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/lilbobb/https://github.com/lilbobb/shopdesklanding.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   bun install
   # or
   npm install
   ```

3. **Start the development server:**
   ```sh
   bun run dev
   

4. **Open your browser and go to:** `http://localhost:3000`

## Usage
- Click on the **Join Now** button to scroll to the form.
- Fill in the form fields and click **Submit**.
- The video can be played/paused by clicking the button in the center.

## Folder Structure
```
📂 your-project
├── 📂 components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── landing.tsx (Main landing page component)
│   └── ...
├── 📂 pages
│   ├── index.tsx (Main entry page)
│   └── api/form-submit.ts (API route for handling form submissions)
├── 📂 public
│   ├── 📂 images (Stores icons and UI images)
│   ├── 📂 videos (Stores promotional videos)
│   └── ...
├── 📂 styles
│   ├── globals.css
│   └── ...
├── next.config.js
├── package.json
└── README.md
```

## Deployment
You can deploy this Next.js application using platforms like:

### **Vercel (Recommended):**
```sh
vercel
```

### **Netlify:**
```sh
netlify deploy
```

## Contributing
If you’d like to contribute:
1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m 'Add feature'`)
4. **Push to the branch** (`git push origin feature-name`)
5. **Create a Pull Request**

## License
This project is licensed under the [MIT License](LICENSE).

---
Made with ❤️ by [Your Name](https://github.com/lilbobb)

