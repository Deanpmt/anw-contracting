import Image from "next/image";

export default function FloatingLogo() {
  return (
    <div className="fixed top-2 left-3 z-50">
      <Image
        src="/ANW_logo.png"
        alt="ANW Contracting logo"
        width={70}
        height={70}
        className="drop-shadow-lg border-1 border-brand-safety/30"
        priority
      />
    </div>
  );
}
