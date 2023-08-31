import { Analytics } from "@vercel/analytics/react";
import "@/constant/style/app.css";

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default Document;
