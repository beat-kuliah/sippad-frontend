import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIP-PAD",
  description: "SIP-PAD",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
