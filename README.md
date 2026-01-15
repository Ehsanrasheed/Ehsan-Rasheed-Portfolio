# Ehsan Rasheed — Professional Portfolio

A clean, modern, recruiter-friendly developer portfolio built with **React 18**, **Tailwind CSS**, and **Framer Motion**. Showcasing MERN Stack expertise with a minimal, professional design.

🌐 **Live**: http://localhost:5173/  
📧 **Email**: m.ehsanrasheed@gmail.com  
💼 **LinkedIn**: [linkedin.com/in/ehsanrasheed](https://linkedin.com/in/ehsanrasheed)  
🔗 **GitHub**: [github.com/Ehsanrasheed](https://github.com/Ehsanrasheed)

---

## ✨ Features

- **6 Complete Sections**: Hero, About, Skills, Projects, Blog, Contact
- **Professional Design**: Clean, minimal aesthetic with soft blue accent
- **Fully Responsive**: Mobile-first design, works on all devices
- **Modern Stack**: React 18, Tailwind CSS, Framer Motion, Vite
- **Optimized**: Fast performance, smooth animations
- **Production Ready**: Ready to deploy

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with resume download
│   ├── Hero.jsx            # Professional introduction
│   ├── About.jsx           # Detailed biography
│   ├── Skills.jsx          # 6 skill categories
│   ├── Projects.jsx        # 4 featured projects
│   ├── ProjectCard.jsx     # Project card component
│   ├── Blog.jsx            # Blog article previews
│   ├── Contact.jsx         # Contact form + info
│   └── Footer.jsx          # Footer with social links
├── data/
│   └── projects.js         # Project data
├── App.jsx                 # Main app
├── main.jsx                # Entry point
└── index.css               # Global styles

public/
└── resume.txt              # Downloadable resume

Configuration:
├── tailwind.config.js      # Tailwind theme
├── vite.config.js          # Vite config
└── vercel.json             # Deployment config
```

---

## 🎨 Customization

### Update Personal Info
1. **Name & Bio**: Edit `src/components/Hero.jsx`, `About.jsx`
2. **Email**: Update in `src/components/Contact.jsx`, `Footer.jsx`
3. **Social Links**: Modify in `Contact.jsx`, `Footer.jsx`

### Add/Edit Projects
Edit `src/data/projects.js`:
```javascript
{
  title: 'Project Name',
  subtitle: 'Short description',
  tech: 'React · Node.js · MongoDB',
  description: 'Detailed description...',
  link: 'https://github.com/...',
  demo: 'https://demo-url.com'
}
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  soft: {
    bg: '#ffffff',        // Background
    surface: '#f9fafb',   // Cards
    text: '#1f2937',      // Text
    muted: '#6b7280',     // Muted text
    accent: '#3b82f6',    // Blue accent
  }
}
```

### Update Skills
Edit arrays in `src/components/Skills.jsx`

### Add Blog Posts
Edit articles array in `src/components/Blog.jsx`

### Replace Resume
Replace `/public/resume.txt` with your PDF file

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Other Options
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Push `dist` to gh-pages branch
- **Any static host**: Upload `dist` folder after build

---

## 🔧 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18.3.1, React DOM |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **Build Tool** | Vite 5.4.21 |
| **Fonts** | Google Fonts (Inter, Poppins) |

---

## 📱 Sections Overview

### 1. Hero Section
- Professional headline: "Hi, I'm Ehsan Rasheed"
- MERN Stack focus
- COMSATS Lahore context
- Dual CTAs: Projects + Resume Download
- Quick stats display

### 2. About Section
- Detailed professional biography
- BS Computer Science at COMSATS Lahore
- MERN stack expertise
- Teaching passion
- Key highlights

### 3. Skills Section
6 organized categories:
- **Languages**: JavaScript, HTML, CSS, C++
- **Frontend**: React, React Native, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Supabase
- **Tools**: Stripe, Cloudinary, Firebase, Git
- **Core Skills**: Authentication, API Design, Responsive UI
- **Other**: Teaching, Problem Solving, Code Review

### 4. Projects Section
4 featured projects:
1. **SalonClick** - AI Salon Booking Platform
2. **Diabeto App** - Diabetes Tracking Mobile App
3. **E-Commerce Store** - Full-Stack Shopping Platform
4. **Railway Management** - Database Design Project

### 5. Blog Section
- Article previews with metadata
- Featured: "How I Built an AI-Based Salon Booking App"
- Tags, read time, publication date

### 6. Contact Section
- Direct contact info cards (Email, LinkedIn, GitHub)
- Professional contact form with validation
- Success notifications

### 7. Footer
- Dark professional theme
- Quick navigation links
- Social media icons
- Copyright & credits

---

## 🎨 Design System

### Color Palette
```
Background:   #ffffff (White)
Surface:      #f9fafb (Light Gray)
Text:         #1f2937 (Dark Gray)
Muted:        #6b7280 (Medium Gray)
Accent:       #3b82f6 (Soft Blue)
```

### Typography
- **Headings**: Poppins (bold, modern)
- **Body**: Inter (clean, readable)

### Key Features
- Minimal, elegant design
- No gradients or flashy effects
- Soft shadows
- Generous spacing
- Professional appearance

---

## 📊 Performance

- ✅ Fast dev server startup (~1.6s)
- ✅ Optimized production build
- ✅ Minimal bundle size (Tailwind purging)
- ✅ Smooth 60fps animations
- ✅ Mobile-optimized

---

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Form labels and ARIA attributes
- ✅ Focus states on interactive elements
- ✅ Color contrast compliance (WCAG 2.1 AA)
- ✅ Touch-friendly button sizes (48px+)
- ✅ Keyboard navigation support

---

## 🐛 Troubleshooting

### CSS Warnings in VS Code
The `@tailwind` and `@apply` warnings are normal. VS Code settings file is included to suppress them.

### Dev Server Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Errors
```bash
# Rebuild
npm run build

# Check output
npm run preview
```

---

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

---

## 🌟 Portfolio Highlights

✨ **Recruiter-Friendly** - Clean, professional layout  
✨ **MERN Specialist** - Clear expertise showcase  
✨ **Teaching Passion** - Demonstrates knowledge sharing  
✨ **Production Quality** - Professional design & code  
✨ **Fully Responsive** - Works on all devices  
✨ **Well Organized** - Clean code structure  
✨ **Fast Performance** - Optimized & efficient  

---

## 📈 Future Enhancements

Optional additions:
- [ ] Dark mode toggle
- [ ] Full blog system with markdown
- [ ] Email form backend (Formspree/EmailJS)
- [ ] Google Analytics
- [ ] SEO optimization (Open Graph tags)
- [ ] RSS feed for blog
- [ ] Project filtering/search

---

## 📄 License

Open source - available for personal and commercial use.

---

## 👤 Author

**Ehsan Rasheed**  
BS Computer Science Student at COMSATS Lahore  
MERN Stack Developer

📧 [m.ehsanrasheed@gmail.com](mailto:m.ehsanrasheed@gmail.com)  
💼 [LinkedIn](https://linkedin.com/in/ehsanrasheed)  
🔗 [GitHub](https://github.com/Ehsanrasheed)

---

## 🙏 Credits

Built with:
- [React](https://react.dev) - UI Library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion) - Animations
- [Vite](https://vitejs.dev) - Build Tool
- [Google Fonts](https://fonts.google.com) - Typography

---

**Version**: 2.0  
**Status**: ✅ Production Ready  
**Last Updated**: January 15, 2026

---

Made with ❤️ by Ehsan Rasheed
