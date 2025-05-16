import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Central Florida Fleet
            </h3>
            <p className="text-gray-400">
              Professional fleet maintenance and repair services in Central
              Florida
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-white"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-gray-400 hover:text-white"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/repairs"
                  className="text-gray-400 hover:text-white"
                >
                  Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/diagnostics"
                  className="text-gray-400 hover:text-white"
                >
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fleet-management"
                  className="text-gray-400 hover:text-white"
                >
                  Fleet Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Central Florida Fleet. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
