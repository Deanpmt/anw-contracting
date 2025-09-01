// This layout only applies to the /jeff-holden route
import Header from "../components/Header";

export default function JeffHoldenLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-offwhite text-brand-charcoal font-sans antialiased">
        {/* Notice: No FloatingLogo or FloatingCTA here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
