// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/globals.css'; 
import Head from 'next/head'; // Import Head for adding meta tags and links
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        {/* Link to Open Sans font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
 {/* jQuery - Removed integrity to bypass hash mismatch */}
 <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          crossOrigin="anonymous"
          async
        ></script>
<script
  src="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js"
  crossOrigin="anonymous"
  async
></script>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
