import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import { Home } from "./pages/HomePage/HomePage";
import { BlogsPage } from "./pages/BlogsPage/BlogsPage";
import { Navbar } from "./components/Navbar";
import { BlogPostPage } from './pages/BlogPostPage/BlogPostPage';
// import { Blog } from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route
          path='/blog/:id'
          element={<BlogPostPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
