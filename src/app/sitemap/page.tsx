import Link from "next/link";

export default function SiteMap() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Home</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-primary hover:underline"
                prefetch={false}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/1"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Service 1
              </Link>
            </li>
            <li>
              <Link
                href="/services/2"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Service 2
              </Link>
            </li>
            <li>
              <Link
                href="/services/3"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Service 3
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Development</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://parthsingh.webarc.one/"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Developer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/contact"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/sitemap"
                className="text-primary hover:underline"
                prefetch={false}
              >
                SiteMap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
