
import styles from "./Hero.module.css";

type HeroAction = {
    label: string;
    href: string;
    variant: "primary" | "secondary";
    external?: boolean;
};

type HeroProps = {
    title: string;
    description: string;
    eyebrow?: string;
    actions?: HeroAction[];
};

export default function Hero({
    title,
    description,
    eyebrow,
    actions,
}: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {eyebrow && (
                    <p className={styles.eyebrow}>{eyebrow}</p>
                )}

                <h1 className={styles.title}>{title}</h1>

                <p className={styles.description}>
                    {description}
                </p>

                {actions && actions.length > 0 && (
                    <div className={styles.actions}>
                        {actions.map((action) => (
                            <a
                                key={action.href}
                                href={action.href}
                                className={`${styles.button} ${styles[action.variant]
                                    }`}
                                target={action.external ? "_blank" : undefined}
                                rel={action.external ? "noopener noreferrer" : undefined}
                            >
                                {action.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
