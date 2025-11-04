export const metadata = {
  title: "Glassmorphism UI",
  description: "A responsive glassmorphism website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
