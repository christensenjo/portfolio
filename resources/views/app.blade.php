<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Joel Christensen') }}</title>

        {{-- Default meta description (can be overridden by Inertia Head) --}}
        <meta head-key="description" name="description" content="Joel Christensen - Full-stack developer specializing in Laravel, Typescript, and modern web technologies.">

        {{-- Canonical URL --}}
        <link rel="canonical" href="{{ url()->current() }}">

        {{-- Open Graph defaults (can be overridden by Inertia Head) --}}
        <meta head-key="og:type" property="og:type" content="website">
        <meta head-key="og:site_name" property="og:site_name" content="{{ config('app.name', 'Joel Christensen') }}">
        <meta head-key="og:title" property="og:title" content="{{ config('app.name', 'Joel Christensen') }}">
        <meta head-key="og:description" property="og:description" content="Full-stack developer specializing in Laravel, Typescript, and modern web technologies.">
        <meta head-key="og:url" property="og:url" content="{{ url()->current() }}">
        <meta head-key="og:image" property="og:image" content="{{ config('app.url') }}/images/og-image.jpg">
        <meta head-key="og:image:width" property="og:image:width" content="1200">
        <meta head-key="og:image:height" property="og:image:height" content="630">
        <meta head-key="og:image:alt" property="og:image:alt" content="Joel Christensen - Full-stack Developer">

        {{-- Twitter Card defaults (can be overridden by Inertia Head) --}}
        <meta head-key="twitter:card" name="twitter:card" content="summary_large_image">
        <meta head-key="twitter:site" name="twitter:site" content="@dataSaysJoel">
        <meta head-key="twitter:creator" name="twitter:creator" content="@dataSaysJoel">
        <meta head-key="twitter:title" name="twitter:title" content="{{ config('app.name', 'Joel Christensen') }}">
        <meta head-key="twitter:description" name="twitter:description" content="Full-stack developer specializing in Laravel, Typescript, and modern web technologies.">
        <meta head-key="twitter:image" name="twitter:image" content="{{ config('app.url') }}/images/og-image.jpg">
        <meta head-key="twitter:image:alt" name="twitter:image:alt" content="Joel Christensen - Full-stack Developer">

        {{-- Favicons --}}
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">

        <meta name="theme-color" content="{{ ($appearance ?? 'system') == 'dark' ? '#111212' : '#f1f9fe' }}" id="theme-color-meta">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
