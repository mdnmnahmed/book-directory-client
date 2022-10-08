import HeroSec from './pages/hero';
import { Link, Route, Routes } from 'react-router-dom';
import BestSeller from './pages/bestSeller';
import GetBook from './pages/getBook';
import GetTopFive from './pages/getTopFive';
import GetLatestBook from './pages/latestBook.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSec />} />
        <Route path="/:id" element={<GetBook />} />
        <Route path="/top-5-books" element={<GetTopFive />} />
        <Route path="/latest-book" element={<GetLatestBook />} />
        <Route path="/bestSeller" element={<BestSeller />} />
      </Routes>
    </div>
  );
}

export default App;
