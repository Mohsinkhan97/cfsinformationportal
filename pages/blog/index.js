// pages/index.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Blog = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1>Welcome to the Blog</h1>
        <p>This is the main page of your website.</p>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
