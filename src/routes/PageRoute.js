import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Homepage = lazy(() => import('../pages/Homepage'));
const BookList = lazy(() => import('../pages/BookList'));
const BookDetail = lazy(() => import('../pages/BookDetail'));
const NotFound = lazy(() => import('../pages/404'));

const Loading = () => <p className="py-5 text-center">Loading ...</p>;

const PageRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/book' element={<BookList/>} />
        <Route path='/book/:id' element={<BookDetail/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Suspense>
  );
}
export default PageRoute;