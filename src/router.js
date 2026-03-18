// ============================================
// ROUTER – Hash-based SPA router
// ============================================

export class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = null;

        window.addEventListener('hashchange', () => this.resolve());
        window.addEventListener('load', () => this.resolve());
    }

    resolve() {
        const hash = window.location.hash.slice(1) || '/';
        const route = this.routes.find(r => r.path === hash) || this.routes.find(r => r.path === '*');

        if (route) {
            this.currentRoute = route;

            // Update meta tags
            if (route.meta) {
                document.title = route.meta.title || 'INSTALACIONES DCV 2024';
                const desc = document.querySelector('meta[name="description"]');
                if (desc && route.meta.description) {
                    desc.setAttribute('content', route.meta.description);
                }
            }

            // Render the page
            const app = document.getElementById('app');
            if (app && route.component) {
                app.innerHTML = route.component();

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'instant' });

                // Initialize page interactions
                if (route.init) {
                    route.init();
                }

                // Fire page view event
                this.trackPageView(hash);
            }
        }
    }

    navigate(path) {
        window.location.hash = path;
    }

    trackPageView(path) {
        // TODO: Uncomment when GA4 is configured
        // if (typeof gtag !== 'undefined') {
        //   gtag('event', 'page_view', { page_path: path });
        // }
    }
}

export function navigateTo(path) {
    window.location.hash = path;
}
