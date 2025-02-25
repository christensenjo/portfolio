<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" href="https://use.typekit.net/bse3xvo.css">
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        {{-- 
        INSTALLED FONTS

        font-family: "ltc-goudy-text-pro", sans-serif;
        font-weight: 400;
        font-style: normal;

        font-family: "ltc-goudy-text-pro-shaded", sans-serif;
        font-weight: 400;
        font-style: normal;


        font-family: "dutch-mediaeval-pro", sans-serif;
        font-weight: 400;
        font-style: normal;

        font-family: "dutch-mediaeval-pro", sans-serif;
        font-weight: 400;
        font-style: italic;

        font-family: "dutch-mediaeval-pro", sans-serif;
        font-weight: 700;
        font-style: normal;

        font-family: "dutch-mediaeval-pro", sans-serif;
        font-weight: 700;
        font-style: italic;


        --}}


        @routes
        @vite(['resources/js/app.ts'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
