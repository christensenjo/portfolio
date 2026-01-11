<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
// import PlaceholderPattern from '../components/PlaceholderPattern.vue';
import { OmbreSynthesis7 } from '@ombre-ui/vue';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

defineProps<{
    name?: string;
}>();
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 relative z-10 mix-blend-normal">
            <!-- <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <PlaceholderPattern />
                </div>
                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <PlaceholderPattern />
                </div>
                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <PlaceholderPattern />
                </div>
            </div>
            <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border md:min-h-min">
                <PlaceholderPattern />
            </div> -->
        </div>
        <OmbreSynthesis7 class="relative z-0 h-full w-full rounded-xl p-4 mix-blend-plus-lighter" :colorA="'#13181B'" :colorB="'#13181B'" :colorC="'#13181B'" :colorD="'#13181B'" :background-color="'#13181B'" :frequency="0.01" :speed="0.01" :amplitude="0.01" :smoothness="0.5" />
        
        <!-- <OmbreChromatic6 class="relative z-0 h-full w-full rounded-xl p-4" :colorA="'#13181B'" :colorB="'#13181B'" :colorC="'#13181B'" :colorD="'#13181B'" :background-color="'#13181B'" :frequency="0.01" :speed="0.01" :amplitude="0.01" :smoothness="0.5" /> -->
    </AppLayout>
</template>
