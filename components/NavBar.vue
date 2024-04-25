<script setup>
    const props = defineProps({
        title: String,
    });
</script>

<template>
    <header class="z-4">
        <nav class="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://github.com/christensenjo" class="flex items-center">
                    <img src="/img/full_stack_logo.svg" class="mr-3 h-8 sm:h-12" alt="Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ title }}</span>
                </a>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NuxtLink 
                                to="https://github.com/christensenjo"
                                target="_blank"
                                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            >
                                <img src="~/assets/img/github.svg" alt="See my GitHub" class="w-10" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="https://linkedin.com/in/full-stack-joel-christensen/"
                                target="_blank"
                                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            >
                                <img src="~/assets/img/linkedin.svg" alt="Visit my LinkedIn" class="w-10" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="https://twitter.com/dataSaysJoel"
                                target="_blank"
                                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            >
                                <img src="~/assets/img/twitter.svg" alt="Check out my Twitter" class="w-10" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
