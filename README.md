# Portfolio - Joel Christensen

A personal portfolio website showcasing my work as a full stack software engineer. This is the second major iteration of my portfolio, redesigned and rebuilt with modern web technologies.

## Overview

This portfolio introduces visitors to my background, experience, and work. It features:

- **Latest Work** - Showcase of recent projects and accomplishments
- **Work Experience** - Detailed descriptions of past roles and contributions
- **Education** - Academic background and learning journey
- **Skills & Interests** - Technical expertise and personal interests
- **Social Links** - Connect via GitHub, Twitter, and LinkedIn

## Tech Stack

- **Minimal Backend**: [Laravel 12](https://laravel.com/docs/12.x)
- **Frontend**: [React 19](https://react.dev/)
- **SSR**: [Inertia.js v2](https://inertiajs.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/docs/installation/using-vite)
- **Animation**: [Motion](https://motion.dev/docs/react)
- **WebGPU Graphics**: [Shaders](https://shaders.com/)

## Version History

This repository contains multiple iterations of my portfolio:

- **v2.0** (main branch) - Current version built with Laravel, Inertia.js, React, Tailwind, Motion, and shaders
- **v1.0** - Nuxt.js-based portfolio with improved design
- **v0.1** - Initial basic static React site (early frontend/full-stack learning)

Previous versions and experiments are available on branches and tags within this repository.

## Setup

This is a Laravel application with Inertia.js and React. To get started:

1. Clone the repository
2. Install PHP dependencies: `composer install`
3. Install Node dependencies: `npm install`
4. Copy `.env.example` to `.env` and configure your environment
5. Generate application key: `php artisan key:generate`
6. Run migrations: `php artisan migrate`
7. Build assets: `npm run build` (or `npm run dev` for development)

## Development

- Frontend development: `npm run dev`
- Backend development: The application is served via Laravel Herd

## License

Personal project - All rights reserved.
