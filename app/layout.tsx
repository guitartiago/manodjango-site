import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mano Django | Rock Cru",
  description: "Rock cru. Sem maquiagem. Sem concessões.",
  metadataBase: new URL("https://manodjango.com.br"),
  openGraph: {
    title: "Mano Django | Rock Cru",
    description: "Rock cru. Sem maquiagem. Sem concessões.",
    url: "https://manodjango.com.br",
    siteName: "Mano Django",
    images: [
      {
        url: "/images/dalton-quadrado.png",
        width: 800,
        height: 800,
        alt: "Mano Django",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mano Django | Rock Cru",
    description: "Rock cru. Sem maquiagem. Sem concessões.",
    images: ["/images/dalton-quadrado.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
