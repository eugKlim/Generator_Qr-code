import './scss/style.scss';
import Footer from './components/Footer';
import Header from './components/Header';

import GetQrUrl from './components/GetQrUrl';

function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RalewayRegular bg-homeBg ">
      <Header />
      <div className="bg-black bg-opacity-95">
        <GetQrUrl />
      </div>
      <Footer />
    </div>
  );
}

export default App;
