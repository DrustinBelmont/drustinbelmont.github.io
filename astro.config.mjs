import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://berin-d.github.io',
    base: '/app',
    integrations: [
        starlight({
            title: 'App',
            sidebar: [
                {
                    label: 'App',
                    collapsed: false,
                    items: [
                        { label: 'Accueil', link: '/' },
                        { label: 'Pages', link: '/pages/about' },
                    ],
                },
                {
                    label: 'AfterWiki',
                    collapsed: false,
                    items: [
                        { label: 'Accueil', link: '/afterwiki/' },
                        { label: 'Intro', link: '/afterwiki/intro' },
                        { label: 'NetCode', link: '/afterwiki/netcode' },
                        { label: 'Guide', link: '/afterwiki/guide' },
                    ],
                },
            ],
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
