import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import PhantomHeader from "@/components/layout/PhantomHeader";
import BottomNav from "@/components/layout/BottomNav";
import Providers from "@/components/ui/Providers";

export const metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3777"
  ),
  title: "Pedro Tambs",
  description: "Product Designer & Design Engineer",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <BootstrapForBrowser />
          <Preloader />
          <PhantomHeader />
          {children}
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
