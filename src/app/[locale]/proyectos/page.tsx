
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { enterpriseProject } from "@/data/projects";

export default async function ProjectsPage() {
    const locale = await getLocale();

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const t = await getTranslations("Projects");

    return (
        <main>
            <h1>{t("title")}</h1>

            <Link
                href={{
                    pathname: "/proyectos/[slug]",
                    params: {
                        slug: enterpriseProject.slugs[locale],
                    },
                }}
            >
                {enterpriseProject.title[locale]}
            </Link>

            <p>
                <Link href="/">{t("back")}</Link>
            </p>
        </main>
    );
}
