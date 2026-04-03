import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentHub Landing',
  description: 'Landing page AgentHub présentant des agents IA utiles au quotidien.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
