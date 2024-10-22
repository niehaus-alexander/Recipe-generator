import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-base-300 py-6">
      <div className="text-center">
        <p className="text-gray-500">© 2024 Your Recipe Website</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <Link href="/impressum" className="hover:text-blue-500">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
