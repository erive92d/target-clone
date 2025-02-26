import Link from "next/link";

export default function TopLayer() {
  return (
    <nav className="navbar bg-red-700 text-white text-sm py-0 px-14 border-b">
      <div className="navbar-start gap-2 w-auto">
        <Link href="/">Ship to 99999</Link>
        <Link href="/">New York</Link>
      </div>
      <div className="hidden lg:flex lg:navbar-end gap-4">
        <Link href="/" className="link-hover">
          Target Circle
        </Link>
        <Link href="/" className="link-hover">
          Target Circle Card
        </Link>
        <Link href="/" className="link-hover">
          Target 360
        </Link>
        <Link href="/" className="link-hover">
          Target Weekly Ads
        </Link>
      </div>
    </nav>
  );
}
