import "./globals.css";

export const metadata = {
  title: "Tiny Tunes",
  description: "Personalized sing-along songs made just for your child.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
