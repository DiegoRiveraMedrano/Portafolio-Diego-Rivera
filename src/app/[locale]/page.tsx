
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <main>
      <h1>Diego Rivera.</h1>

      <p>{t("subtitle")}</p>

      <nav aria-label="Language">
        <Link href="/" locale="es" replace scroll={false}>ES</Link>
        {" | "}
        <Link href="/" locale="en" replace scroll={false}>EN</Link>
      </nav>

      <Link href="/proyectos">
        {t("projects")}
      </Link>
    </main>
  );
}
