import AppProvider from "@/context/AppProvider";
import "../globals.css";
import type { Metadata } from "next";
import BaseLayout from "@/components/layouts/BaseLayout";

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "Personal Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <BaseLayout>{children}</BaseLayout>
        </AppProvider>
      </body>
    </html>
  );
}
