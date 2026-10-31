
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["es", "en"],
    defaultLocale: "es",
    localePrefix: "always",

    pathnames: {
        "/": "/",

        "/proyectos": {
            es: "/proyectos",
            en: "/projects",
        },

        "/proyectos/[slug]": {
            es: "/proyectos/[slug]",
            en: "/projects/[slug]",
        },
    },
});
