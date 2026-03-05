# 📌 Hero Section

---

## 🧩 Components structure

```
Home (main)
└── Hero (section)
    ├── article (hero__content)
    │   ├── h1 (hero__content--title)
    │   └── p (hero__content--desc)
    └── div (user-actions)
        ├── Link → /register (btn-primary)
        └── Link → /about (btn-secondary)
```

---

## 📁 files

| file               | what it does           |
| ------------------ | ---------------------- |
| `Home.tsx`         | main container of page |
| `Hero.tsx`         | Hero section           |
| `home.module.scss` | shared layout styles   |
| `hero.module.scss` | styles Hero section    |
| `_global.scss`     | global styles          |

---

## 🎨 Styling

- background is gradient + SVG pattern
- mobile uses -> `bg-pattern-intro-mobile.svg`
- desktop uses -> `bg-pattern-intro-desktop.svg`
- gradient from `--gradient-orange` to `--gradient-red`
- min-height section is `70vh`
- content flexbox center

---

## 🔗 Navigation

| buttons        | distnation  |
| -------------- | ----------- |
| Start for Free | `/register` |
| Learn More     | `/about`    |

- using `Link` from react-router-dom not `useNavigate` because it's not an action
- for buttons we uses `data-type` styling: `primary` و `secondary`

---

## ♿ Accessibility

| element              | inhanse                                                |
| -------------------- | ------------------------------------------------------ |
| `section`            | `aria-labelledby="hero-title"`                         |
| `h1`                 | `id="hero-title"`                                      |
| `div` (user-actions) | `role="group"` + `aria-label="Call to action buttons"` |

---

## 🔍 SEO

`index.html`:

```html
<title>Blogr — A modern publishing platform</title>
<meta
	name="description"
	content="Grow your audience and build your online brand with Blogr."
/>
```
