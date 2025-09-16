import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className="text-center">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          Deck Royale
        </h1>
      </header>
      <main >
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Sobre a API</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </p>
        </section>
        <section className="text-center">
          <Link
            href="/cards"
            className={styles.couche1}
          >
            Ver Cartas
          </Link>
        </section>
      </main>
    </div>
  );
}