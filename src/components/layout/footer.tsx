export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Merivan Consults. All rights reserved. | Kampala, Uganda</p>
        <p className="mt-2 text-sm">Licensed Car Import Agent | Real Estate Broker License #RE2025UG</p>
      </div>
    </footer>
  );
}
