import Nav from '../components/Nav';
import './globals.css';


export const metadata = {
  title: 'Expert Scorecard',
  description: 'Track the batting average of public market experts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Nav />
        <main className="max-w-4xl mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}