// pages/index.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Information = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1>Welcome to the Information</h1>
        <p>This is the main page of your website.</p>
      </div>
      <Footer />
    </>
  );
};

export default Information;
