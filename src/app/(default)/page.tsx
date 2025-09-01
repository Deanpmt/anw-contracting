// src/app/(default)/page.tsx
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="text-center py-20">
        <img
          src="/under_construction.jpg"
          alt="Under construction"
          className="mx-auto mt-4 w-32 h-32 border-3 border-brand-charcoal"
        />

        <h2 className="text-4xl font-serif font-bold text-brand-evergreen">
          Welcome to Artemis Northwest&apos;s <br /> Dirt and Tree Work.
        </h2>

        <p className="mt-4 text-lg text-brand-charcoal">
          Site is still under development –{" "}
          <span className="text-brand-safety font-semibold">
            please check back soon!
          </span>
        </p>

        {/* Quotes section */}
        <section
          aria-label="Quotes"
          className="mx-auto max-w-2xl space-y-8 text-brand-charcoal pt-8 mt-20 text-left border-t-2 border-brand-safety/50"
        >
          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “The clearest way into the Universe is through a forest wilderness.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              John Muir
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “Do what you can, with what you have, where you are.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Theodore Roosevelt
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “The Earth is what we all have in common.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Wendell Berry
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “Conservation is a state of harmony between men and land.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Aldo Leopold
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “The best time to plant a tree was 20 years ago. The second best time is now.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Proverb
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “What is the use of a house if you haven't got a tolerable planet to put it on?”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Henry David Thoreau
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “Nature is not a place to visit. It is home.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Gary Snyder
            </figcaption>
          </figure>

          <figure className="border-l-2 border-brand-safety/70 pl-4">
            <blockquote className="font-serif text-xl">
              “In nature nothing exists alone.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-brand-charcoal/70">
              Rachel Carson
            </figcaption>
          </figure>
        </section>
      </section>
    </main>
  );
}
