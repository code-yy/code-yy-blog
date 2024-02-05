import { Analytics } from "@vercel/analytics/react";
import "@/constant/style/app.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default Document;
