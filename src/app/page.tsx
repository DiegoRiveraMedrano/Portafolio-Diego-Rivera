
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <p>SOFTWARE DEVELOPER</p>

          <h1>Diego Rivera.</h1>

          <p>
            Desarrollo software que resuelve problemas reales.
            De la idea a producción.
          </p>
        </div>

        <div className={styles.ctas}>
          <a className={styles.primary} href="#proyectos">
            Ver proyectos
          </a>

          <a
            className={styles.secondary}
            href="https://www.linkedin.com/in/diegoriveramedrano"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </main>

      <section id="proyectos">
        <h2>Proyectos</h2>
      </section>
    </div>
  );
}
