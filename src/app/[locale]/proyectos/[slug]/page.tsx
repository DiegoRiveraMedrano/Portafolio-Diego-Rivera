
import { Suspense } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { enterpriseProject } from "@/data/projects";

type Props = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export function generateStaticParams({
    params,
}: {
    params: { locale: string };
}) {
    const locale = params.locale === "en" ? "en" : "es";

    return [
        { slug: enterpriseProject.slugs[locale] },
    ];
}

// Página principal: no espera los parámetros
export default function ProjectPage({ params }: Props) {
    return (
        <main>
            <Suspense fallback={<p>Cargando proyecto...</p>}>
                <ProjectDetails params={params} />
            </Suspense>
        </main>
    );
}

// Componente hijo: aquí sí esperamos los parámetros
async function ProjectDetails({ params }: Props) {
    const { locale, slug } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    if (slug !== enterpriseProject.slugs[locale]) {
        notFound();
    }

    return (
        <>
            <h1>{enterpriseProject.title[locale]}</h1>

            <p>{enterpriseProject.description[locale]}</p>

            <nav aria-label="Language">
                <Link
                    href={{
                        pathname: "/proyectos/[slug]",
                        params: {
                            slug: enterpriseProject.slugs.es,
                        },
                    }}
                    locale="es"
                    replace
                    scroll={false}
                >
                    ES
                </Link>

                {" | "}

                <Link
                    href={{
                        pathname: "/proyectos/[slug]",
                        params: {
                            slug: enterpriseProject.slugs.en,
                        },
                    }}
                    locale="en"
                    replace
                    scroll={false}
                >
                    EN
                </Link>
            </nav>
        </>
    );
}
