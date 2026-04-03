import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Landing | AgentHub',
  description: 'Landing page pour AgentHub et ses agents IA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
