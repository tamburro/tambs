import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import PhantomHeader from "@/components/layout/PhantomHeader";
import BottomNav from "@/components/layout/BottomNav";
import Providers from "@/components/ui/Providers";

export const metadata = {
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
