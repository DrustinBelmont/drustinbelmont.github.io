import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;

    // Bloquer l'accès à /app sauf /app/afterwiki
    if (pathname.startsWith('/app/') && !pathname.startsWith('/app/afterwiki')) {
        // Rediriger vers le wiki public
        return context.redirect('/app/afterwiki/');
    }

    // Si on essaie d'accéder à /app directement, rediriger aussi
    if (pathname === '/app/') {
        return context.redirect('/app/afterwiki/');
    }

    return next();
});
