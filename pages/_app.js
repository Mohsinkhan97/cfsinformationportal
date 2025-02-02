// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/globals.css'; 
import Script from 'next/script'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* jQuery */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive" // Or "afterInteractive"
      />
      
      {/* Owl Carousel JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive" // Or "afterInteractive"
      />
    </>
  );
}

export default MyApp;
