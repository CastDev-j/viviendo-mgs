## Component structure

We reorganized `src/components` for clarity and scalability. New subfolders:

- `src/components/animations/` – Reusable motion helpers (FadeAnimation, FadeUpContainer, FadeDownAnimation)
- `src/components/ui/` – Small presentational components (BackToTopAstroButton, SocialLinks, TestContainer, Logo)
- `src/components/sections/` – Page sections composed of UI + logic (Carousel, Timeline)
- `src/components/pages/` – Page-level React components (ContactPage, NotFoundPage)

All pages and layouts were updated to import from these new paths. For backward compatibility, the previous files under `src/components/` now re-export or wrap the new components. Prefer importing from the new locations for any future work.

Examples:

- `import { FadeAnimation } from "@/components/animations/FadeAnimation"`
- `import { TestContainer } from "@/components/ui/TestContainer"`
- `import Timeline from "@/components/sections/Timeline.astro"`

## Security headers

Do not set security headers (e.g., X-Frame-Options, X-Content-Type-Options, Content-Security-Policy) using `<meta http-equiv>` in HTML. Browsers ignore these directives when delivered via meta. Always send them as HTTP response headers from your host.

This repo targets Vercel (static output). We include a root `vercel.json` that applies headers to all routes:

```
{
	"headers": [
		{
			"source": "/(.*)",
			"headers": [
				{ "key": "Content-Security-Policy", "value": "frame-ancestors 'self'" },
				{ "key": "X-Frame-Options", "value": "SAMEORIGIN" },
				{ "key": "X-Content-Type-Options", "value": "nosniff" }
			]
		}
	]
}
```

Notes:

- Prefer `Content-Security-Policy: frame-ancestors 'self'` as the modern way to control framing. `X-Frame-Options` is kept for legacy compatibility.
- `X-XSS-Protection` is deprecated and intentionally omitted.

### Netlify alternative

If deploying to Netlify, create `public/_headers` with:

```
/*
	Content-Security-Policy: frame-ancestors 'self'
	X-Frame-Options: SAMEORIGIN
	X-Content-Type-Options: nosniff
```

Netlify will copy this into the built site and serve these headers for all paths.
