import Script from "next/script";

export const metadata = {
  title: "Aksharbhandar - অক্ষরভান্ডার",
  description:
    "টিম মার্শালের বিশ্বখ্যাত ৩টি বই — প্রিজনার্স অব জিওগ্রাফি, দ্য পাওয়ার অব জিওগ্রাফি, দ্য ফিউচার অব জিওগ্রাফি। মাত্র ৪৯০ টাকায় পান। ক্যাশ অন ডেলিভারি।",
  icons: {
    icon: "/b1833076-612f-494e-acd8-79741a729470.jpg",
    shortcut: "/b1833076-612f-494e-acd8-79741a729470.jpg",
    apple: "/b1833076-612f-494e-acd8-79741a729470.jpg",
  },
  openGraph: {
    title: "জিওগ্রাফি ট্রিলজি — মাত্র ৪৯০ টাকায়!",
    description: "৩টি মাস্টারপিস বই এখন মাত্র ৪৯০ টাকায়। সারাদেশে হোম ডেলিভারি।",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', 'YOUR_PIXEL_ID_HERE');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}