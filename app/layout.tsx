import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VetOS Caribbean | Better Care. Simpler Clinics.",
  description: "Veterinary clinic discovery and appointment requests for Trinidad and Tobago.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
