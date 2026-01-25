# Portfolio Theme Intentions and Rules

## Color Palette
You can check the imported shadcn variables that I imported from tweakcn via `npx shadcn@latest add https://tweakcn.com/r/themes/cmkehj82b000004jvdm7n8y6i`. This has a lot of detail, but I want to expound on my intentions for our color palette and theme.

The site will primarily be in our branded white/black variant colors, which are .base { color: #f1f9fe; } and .dark { color: #111212; }. Please refactor our app.css so that all references to these colors use variables called base and dark respectively. Besides that, we have a primary color and an accent color for both dark and base. The primary color you'll see listed in the imported shadcn styles is .vue { color: #3fb27f; }
. We use this primary color sparingly, in our hero image, in some icons, and in the footer logo. The accent colors you'll see are in the shadcn styles currently as #C4CBCF, call it "base-muted" or #3E4041, call it "dark-muted". These are hex codes that coorespond to the actual approach I want to use, which is to use muted base or dark colors. What this means is that instead of using #C4CBCF, we'll use the .base color #f1f9fe at 20% opacity. This is equivalent to the hex code #C4CBCF, but my preferred approach. Similarly, dark color #111212 at 20% is equivalent to #3E4041. Let's make variables for both the opacity version and the hex version of these muted/accent colors, but prefer using the opacity versions.

Another thing to note is that the shadcn styles were imported from tweakcn in OKLCH format. This is my preference, but I've been describing them in HEX format for clarity. Here is a map of the HEX codes to the styles so that you can understand what OKLCH colors are the HEX colors I've been describing:

:root {
  --background: #f1f9fe;
  --foreground: #111212;
  --card: #f1f9fe;
  --card-foreground: #111212;
  --popover: #f1f9fe;
  --popover-foreground: #111212;
  --primary: #3fb27f;
  --primary-foreground: #111212;
  --secondary: #c4cbcf;
  --secondary-foreground: #111212;
  --muted: #c4cbcf;
  --muted-foreground: #3e4041;
  --accent: #c4cbcf;
  --accent-foreground: #111212;
  --destructive: #f23b2f;
  --destructive-foreground: #111212;
  --border: #111212;
  --input: #c4cbcf;
  --ring: #3e4041;
  --chart-1: #3fb27f;
  --chart-2: #f23b2f;
  --chart-3: #36b7f0;
  --chart-4: #111212;
  --chart-5: #c4cbcf;
  --sidebar: #f1f9fe;
  --sidebar-foreground: #111212;
  --sidebar-primary: #3fb27f;
  --sidebar-primary-foreground: #111212;
  --sidebar-accent: #c4cbcf;
  --sidebar-accent-foreground: #111212;
  --sidebar-border: #c4cbcf;
  --sidebar-ring: #3e4041;
  --font-sans: Geist, ui-sans-serif, sans-serif, system-ui;
  --font-serif: Georgia, serif;
  --font-mono: Fira Code, monospace;
  --radius: 0.35rem;
  --shadow-x: 0px;
  --shadow-y: 2px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.15;
  --shadow-color: hsl(0 0% 20% / 0.1);
  --shadow-2xs: 0px 2px 0px 0px hsl(0 0% 20% / 0.07);
  --shadow-xs: 0px 2px 0px 0px hsl(0 0% 20% / 0.07);
  --shadow-sm: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 1px 2px -1px hsl(0 0% 20% / 0.15);
  --shadow: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 1px 2px -1px hsl(0 0% 20% / 0.15);
  --shadow-md: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 2px 4px -1px hsl(0 0% 20% / 0.15);
  --shadow-lg: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 4px 6px -1px hsl(0 0% 20% / 0.15);
  --shadow-xl: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 8px 10px -1px hsl(0 0% 20% / 0.15);
  --shadow-2xl: 0px 2px 0px 0px hsl(0 0% 20% / 0.38);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: #111212;
  --foreground: #f1f9fe;
  --card: #111212;
  --card-foreground: #f1f9fe;
  --popover: #111212;
  --popover-foreground: #f1f9fe;
  --primary: #3fb27f;
  --primary-foreground: #111212;
  --secondary: #3e4041;
  --secondary-foreground: #f1f9fe;
  --muted: #3e4041;
  --muted-foreground: #c4cbcf;
  --accent: #3e4041;
  --accent-foreground: #f1f9fe;
  --destructive: #f23b2f;
  --destructive-foreground: #111212;
  --border: #f1f9fe;
  --input: #c4cbcf;
  --ring: #3e4041;
  --chart-1: #3fb27f;
  --chart-2: #f23b2f;
  --chart-3: #36b7f0;
  --chart-4: #f1f9fe;
  --chart-5: #3e4041;
  --sidebar: #111212;
  --sidebar-foreground: #f1f9fe;
  --sidebar-primary: #3fb27f;
  --sidebar-primary-foreground: #111212;
  --sidebar-accent: #3e4041;
  --sidebar-accent-foreground: #f1f9fe;
  --sidebar-border: #3e4041;
  --sidebar-ring: #c4cbcf;
  --font-sans: Geist, ui-sans-serif, sans-serif, system-ui;
  --font-serif: Georgia, serif;
  --font-mono: Fira Code, monospace;
  --radius: 0.35rem;
  --shadow-x: 0px;
  --shadow-y: 2px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.15;
  --shadow-color: hsl(0 0% 20% / 0.1);
  --shadow-2xs: 0px 2px 0px 0px hsl(0 0% 20% / 0.07);
  --shadow-xs: 0px 2px 0px 0px hsl(0 0% 20% / 0.07);
  --shadow-sm: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 1px 2px -1px hsl(0 0% 20% / 0.15);
  --shadow: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 1px 2px -1px hsl(0 0% 20% / 0.15);
  --shadow-md: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 2px 4px -1px hsl(0 0% 20% / 0.15);
  --shadow-lg: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 4px 6px -1px hsl(0 0% 20% / 0.15);
  --shadow-xl: 0px 2px 0px 0px hsl(0 0% 20% / 0.15), 0px 8px 10px -1px hsl(0 0% 20% / 0.15);
  --shadow-2xl: 0px 2px 0px 0px hsl(0 0% 20% / 0.38);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

One more thing on colors. You'll notice that we only have a single primary color, in our app.css currently: 
vue { color: #3fb27f; } (or --primary: oklch(0.6854 0.1287 160.6260);).

This is a green primary color I like, and we will use it as described. However, I have an idea for an implementation where every time the home page loads or is refreshed, the primary color of the site changes at random between one of three primary color options. These are:

1) .vue { color: #3fb27f; } (a green), oklch(0.6854 0.1287 160.6260);
2) .laravel { color: #f23b2f; } (a red), oklch(0.6317 0.2204 28.8438);
3) .tailwind { color: #36b7f0; } (a blue), oklch(0.7355 0.1354 232.5490);

I'd like us to also create variables for the laravel and tailwind colors, and implement a system that will alternate the primary color between the three as I've described.

That finishes my notes on color. 

## Font Styles
You'll see in @resources/css/app.css that we use Geist as --font-sans. This should be our default font for text. 

All our text should be lowercase. I would prefer that we simply type the text in lowercase rather than resorting to the use of `lowercase` classes.

The only other font styles that we'll be using throughout the site are the following:
- font-bold tailwind style on some Geist text
- font-title custom tailwind class on some Geist text

font-bold is a built in tailwind class
font-title is a tailwind class I want to add to the site for my use in titles. It's effect should be to change the letter spacing from 0% (normal, default) to -10% (condensed text for some title text, which will also be bolded via font-bold). Make sure to implement this custom Tailwind class.

## Components
Prefer using shadcn components, but styled to match our design language. To see options for adding, viewing, or searching shadcn components from the CLI, see these docs: https://ui.shadcn.com/docs/cli. Use the shadcn MCP installed here in Cursor.

## Design Language
When creating a new component, refactoring an existing one, or modifying templating in general, follow these guidelines:
1. Do not use rounded styles unless explicitly directed to, we are going for a boxy, grid-based style in this website.
2. Use colors and fonts as previously described. This should mostly work out of the box via the shadcn theming in our app.css.
3. Design mobile-first. When instructed to build or refactor code, design template changes with mobile styles in mind first, then add breakpoint styles as necessary.
4. As mentioned, we will use a grid-based style to build this app. That will mean using Tailwind grid classes, but we'll also be implementing a gridlines visual component that breaks up the center of the page into a visual grid of squares using dashed lines that are dark-muted in light mode or base-muted in dark mode. 