
import * as rootParams from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
    const currentLocale = locale ?? (await rootParams.locale());

    if (!hasLocale(routing.locales, currentLocale)) {
        notFound();
    }

    return {
        locale: currentLocale,
        messages: (
            await import(`../../messages/${currentLocale}.json`)
        ).default,
    };
});
