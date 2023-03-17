import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { RouterProvider, createBrowserRouter, 
  createRoutesFromElements, Route } from 'react-router-dom';
import Search from './components/search';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <HomePage /> }></Route>
    <Route path=":type" element={ <HomePage /> }></Route>
    <Route path=":type/:id" element={ <PetDetailsPage /> }></Route>
    <Route path="/search" element={ <SearchPage /> }></Route>
    <Route path="/pet-details-not-found" element={ <PetDetailsNotFound /> }></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
