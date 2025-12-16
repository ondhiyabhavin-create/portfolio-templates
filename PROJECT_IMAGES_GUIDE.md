# 📸 How to Add Project Screenshots

This guide explains how to automatically generate screenshots for your projects using the screenshot API.

## 🚀 Quick Start (Automatic Screenshots)

**The easiest way:** Just add URLs to your project and screenshots will be generated automatically!

1. **Add `screenshotUrls`** array to your project in `lib/constants.ts`
2. **Screenshots are generated automatically** via the API
3. **No manual screenshots needed!**

## ✨ Automatic Screenshot Generation

The system automatically generates screenshots from URLs using the screenshot API. Just add URLs to your project:

## Step-by-Step Instructions

### Method 1: Automatic Screenshots (Recommended) ✨

Simply add URLs to your project - screenshots are generated automatically!

In `lib/constants.ts`, update your project:

```typescript
{
  id: 1,
  title: "ThinSLICE Digital Repository",
  // ... other fields ...
  image: "https://thinslice-scalecapacity.vercel.app/", // Primary URL
  screenshotUrls: [
    "https://thinslice-scalecapacity.vercel.app/",           // Homepage
    "https://thinslice-scalecapacity.vercel.app/search",     // Search page
    "https://thinslice-scalecapacity.vercel.app/about",      // About page
    // Add more URLs for different pages/routes
  ],
  link: "https://thinslice-scalecapacity.vercel.app/",
  // ... rest of project ...
}
```

**That's it!** Screenshots will be automatically generated from these URLs.

### Method 2: Manual Local Images

If you prefer to use your own screenshots:

1. **Create Screenshots Folder**
```
public/
  projects/
    thinslice/
      home.png
      search.png
      detail.png
```

2. **Add Images to Project**
```typescript
{
  id: 1,
  title: "ThinSLICE Digital Repository",
  // ... other fields ...
  images: [
    "/projects/thinslice/home.png",
    "/projects/thinslice/search.png",
    "/projects/thinslice/detail.png"
  ],
  // ... rest of project ...
}
```

### 3. How It Works

**Priority Order:**
1. **`screenshotUrls`** - Automatically generates screenshots from URLs (highest priority)
2. **`images`** - Uses local image files if provided
3. **`image`** - Falls back to single image field

**Display:**
- **Project Cards**: Shows first screenshot/image
- **Project Detail Page**: 
  - Shows main image (first in array)
  - Shows thumbnail gallery below (if multiple images/pages)
  - Click any image to open full-screen modal
  - Navigate with arrow keys or buttons
  - Shows "X pages" badge when using `screenshotUrls`

### 4. Image Requirements (for Manual Method)

- **Format**: PNG or JPG
- **Recommended size**: 1920x1080px (16:9 aspect ratio)
- **File size**: Keep under 500KB per image for fast loading
- **Naming**: Use descriptive names (e.g., `homepage.png`, `features.png`)

## Examples

### Example 1: Automatic Screenshots (Recommended)

```typescript
{
  id: 1,
  title: "My Awesome Project",
  description: "A great project",
  tech: ["Next.js", "React"],
  image: "https://myproject.com",
  screenshotUrls: [
    "https://myproject.com",              // Homepage
    "https://myproject.com/features",     // Features page
    "https://myproject.com/about",        // About page
    "https://myproject.com/contact"       // Contact page
  ],
  link: "https://myproject.com",
  featured: true,
  category: "Web App",
}
```

### Example 2: Manual Local Images

```typescript
{
  id: 2,
  title: "Another Project",
  description: "Another great project",
  tech: ["Next.js", "React"],
  image: "/projects/another/home.png",
  images: [
    "/projects/another/home.png",
    "/projects/another/features.png",
    "/projects/another/about.png"
  ],
  link: "https://anotherproject.com",
  featured: true,
  category: "Web App",
}
```

## Tips

### For Automatic Screenshots (`screenshotUrls`):
- ✅ Add URLs for different pages/routes of your project
- ✅ Include homepage, features, about, etc.
- ✅ Screenshots are generated automatically - no manual work!
- ✅ Works with any publicly accessible URL

### For Manual Images (`images`):
- ✅ Use consistent naming conventions
- ✅ Optimize images before uploading (use tools like TinyPNG)
- ✅ Take screenshots at the same resolution for consistency
- ✅ Show different pages/features of your project
- ❌ Don't use URLs in `images` array - use local file paths only
- ❌ Don't forget the leading `/` in image paths

## Need Help?

If you have questions, check:
- Image paths start with `/` (e.g., `/projects/...`)
- Images are in the `public` folder
- File extensions match (.png, .jpg, .jpeg)

