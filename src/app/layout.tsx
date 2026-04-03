import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentHub — Landing',
  description: 'Une landing page pour présenter des agents IA utiles au quotidien.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}