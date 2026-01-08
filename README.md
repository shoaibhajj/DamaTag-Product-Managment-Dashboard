# Damatag – Product Management Dashboard

A modern **Product Management Dashboard** built with **Next.js App Router**, **TypeScript**, **Redux Toolkit**, and **Material UI**, showcasing real-world frontend architecture, state management, and performance best practices.

🔗 **Live Demo:**
[https://dama-tag-product-managment-dashboar.vercel.app/](https://dama-tag-product-managment-dashboar.vercel.app/)

---

## 📌 Overview

This project was developed as a technical assessment to demonstrate:

* Scalable frontend architecture
* Advanced state management with Redux Toolkit & RTK Query
* URL-synced filtering using modern routing patterns
* Clean UI with Material UI + Tailwind
* Performance optimizations and testing best practices

The application consumes the **FakeStore API** and provides a full e-commerce style product browsing experience.

---

## ✨ Features

### 🛍 Product Browsing

* Product grid with optimized images (`next/image`)
* Skeleton loaders and error states
* Responsive layout (desktop & mobile)

### 🔎 Search & Filtering

* Search by title and description
* Category filtering
* Price range filtering
* Rating filtering
* Sorting (price, rating)
* URL-synced state using **nuqs**

### 📄 Product Details

* Dynamic product pages (`/products/[id]`)
* Star rating display
* Full product description
* Add to cart functionality

### 🛒 Cart Management

* Global cart state (Redux)
* Add / remove / update quantity
* Cart drawer accessible from anywhere
* Total price & total items selectors

### ❤️ Wishlist

* Wishlist slice
* Toggle wishlist state per product
* Persistent UI state across views

### 📱 Responsive UI

* Mobile-first approach
* Sidebar filters on desktop
* Drawer-based filters on mobile
* Adaptive Navbar behavior per route

---

## 🧪 Testing

* **Unit tests** for cart reducer and actions
* Tested scenarios:

  * Add to cart
  * Increase quantity
  * Update quantity
  * Remove item
  * Clear cart
* Implemented using **Vitest**

This ensures business logic correctness and prevents regressions.

---

## 🏗 Architecture & Technical Decisions

### Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Redux Toolkit**
* **RTK Query**
* **Material UI (MUI)**
* **Tailwind CSS**
* **nuqs (URL state sync)**
* **Vitest (unit testing)**

---

### State Management Strategy

| Concern                 | Solution                  |
| ----------------------- | ------------------------- |
| Server data             | RTK Query                 |
| Global business state   | Redux Toolkit             |
| UI state (cart/sidebar) | Lightweight React Context |
| URL-driven state        | nuqs                      |

This separation keeps the codebase predictable and scalable.

---

### Filtering & Pagination Strategy

The FakeStore API does **not** support advanced server-side filtering or pagination.
To ensure correctness:

1. Fetch all products once
2. Apply filters and sorting client-side
3. Apply pagination (`Load More`) **after filtering**

This avoids incorrect empty states and ensures a consistent UX.

---

### Routing & Rendering

* Route Groups (`(home)`) for layout isolation
* Global Navbar & Footer
* Page-specific layouts for filters
* `Suspense` boundaries to support URL-based state during prerendering

---

## 📂 Project Structure

```txt
app/
├─ layout.tsx
├─ providers.tsx
├─ ui-context.tsx
├─ (home)/
│  ├─ layout.tsx
│  └─ page.tsx
├─ products/
│  └─ [id]/
│     └─ page.tsx

features/
├─ products/
├─ cart/
├─ wishlist/
├─ layout/

store/
├─ api/
├─ slices/
├─ selectors/
└─ index.ts
```

---

## 🧾 Commit History (Milestones)

### Commit 1 – Project Setup

**`chore: setup Next.js with TS, MUI, Tailwind, Redux Toolkit`**

* Next.js App Router
* MUI theme setup
* Redux Provider
* Tailwind configuration

### Commit 2 – API Layer

**`feat: setup RTK Query products API with typed endpoints`**

* Products API
* Categories
* Product details
* Strong typing

### Commit 3 – Product Grid

**`feat: display product grid with loading and error states`**

* Product cards
* Skeleton loaders
* Error handling

### Commit 4 – Filters System

**`feat: implement search and filters with URL state sync`**

* Search
* Filters
* nuqs integration

### Commit 5 – Product Details

**`feat: add product details page with rating and add to cart`**

### Commit 6 – Cart Management

**`feat: implement cart slice and cart drawer`**

### Commit 7 – Enhancements

**`feat: add sorting, wishlist, and responsive design`**

### Commit 8 – Polish & Performance

**`chore: improve performance, UX, and code quality`**

* Memoized selectors
* Cleanup
* UX improvements

### Commit 9 – README & Deployment

**`docs: add README and deploy application`**

* Documentation
* Vercel deployment
* Final testing

---

## 🚀 Deployment

The application is deployed on **Vercel**:

🔗 **Live URL:**
[https://dama-tag-product-managment-dashboar.vercel.app/](https://dama-tag-product-managment-dashboar.vercel.app/)

---

## 🧠 What I Would Add With More Time

* Persistent cart & wishlist (localStorage)
* E2E tests (Playwright)
* Server-side pagination with a real API
* Accessibility audit (ARIA)
* Improved animations and micro-interactions

---

## 👤 Author

**Shoaib Hajj**
Frontend Engineer (React / Next.js)

* LinkedIn: [https://www.linkedin.com/in/shoaib-haj-hussen](https://www.linkedin.com/in/shoaib-haj-hussen)
* GitHub: [https://github.com/shoaibhajj](https://github.com/shoaibhajj)

---

## 📜 License

This project is for demonstration and evaluation purposes only.

---

