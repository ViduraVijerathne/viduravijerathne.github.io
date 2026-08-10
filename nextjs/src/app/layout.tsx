import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidura Vijerathne | Engineering the Future with Code, Machines & Intelligence",
  description: "Portfolio of Vidura Vijerathne — Mechanical Engineering Technology undergraduate at Uva Wellassa University specializing in Software Engineering, Robotics, Electronics, and Embedded Systems.",
  keywords: "Vidura Vijerathne, Vidura, Mechanical Engineering, Software Engineering, Robotics, Embedded Systems, Flutter, Python, Java, AI, Uva Wellassa University, viduravijerathne.tech, portfolio",
  authors: [{ name: "Vidura Vijerathne" }],
  alternates: {
    canonical: "https://viduravijerathne.tech/",
  },
  openGraph: {
    type: "website",
    url: "https://viduravijerathne.tech/",
    title: "Vidura Vijerathne | Engineering the Future with Code, Machines & Intelligence",
    description: "Portfolio of Vidura Vijerathne — Mechanical Engineering Technology undergraduate at Uva Wellassa University specializing in Software Engineering, Robotics, Electronics, and Embedded Systems.",
    images: ["https://viduravijerathne.tech/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidura Vijerathne | Engineering the Future with Code, Machines & Intelligence",
    description: "Portfolio of Vidura Vijerathne — Mechanical Engineering Technology undergraduate at Uva Wellassa University specializing in Software Engineering, Robotics, Electronics, and Embedded Systems.",
    images: ["https://viduravijerathne.tech/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
