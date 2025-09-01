export default function FloatingCTA() {
  return (
    <div
      className="
        fixed top-16 left-1/2 -translate-x-1/2 
        flex flex-col gap-2
        sm:flex-row sm:gap-6 sm:top-15 lg:top-15
        z-50
      "
    >
      {/* Primary CTA */}
      <a
        href="#quote"
        className="
          rounded-md bg-brand-safety text-white
          px-3 py-2 text-sm sm:px-5 sm:py-3 sm:text-base
          font-medium
          shadow hover:shadow-md hover:-translate-y-0.5
          transition
        "
      >
        Get Quote
      </a>

      {/* Secondary CTA */}
      <a
        href="#services"
        className="
          rounded-md bg-brand-offwhite text-brand-safety
          border border-brand-safety/60
          px-3 py-2 text-sm sm:px-5 sm:py-3 sm:text-base
          font-medium
          shadow-sm hover:shadow-md hover:-translate-y-0.5
          transition
        "
      >
        See Services
      </a>
    </div>
  );
}
