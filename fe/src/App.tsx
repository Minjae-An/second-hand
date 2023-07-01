import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@context/themeContext';
import { UserProvider } from '@context/userContext';

import { PATH } from './constants';

import Home from '@pages/Home';
import RegionSetting from '@pages/RegionSetting';
import Category from '@pages/Category';
import CategoryDetail from '@pages/CategoryDetail';
import Sales from '@pages/Sales';
import Interests from '@pages/Interests';
import Chatting from '@pages/Chatting';
import MyAccount from '@pages/MyAccount';
import LoginLoading from '@pages/LoginLoading';
import NewProduct from '@pages/NewProduct';
import ProductDetail from '@pages/ProductDetail';
import NotFound from '@pages/NotFound';

import PrivateRoutes from '@components/PrivateRoutes';

import GlobalStyle from '@styles/GlobalStyle';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route index path={PATH.HOME} element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route path={PATH.REGION_SETTING} element={<RegionSetting />} />
              <Route path={PATH.CATEGORY} element={<Category />} />
              <Route path={PATH.CATEGORY_DETAIL} element={<CategoryDetail />} />
              <Route path={PATH.SALES} element={<Sales />} />
              <Route path={PATH.INTERESTS} element={<Interests />} />
              <Route path={PATH.CHATTING} element={<Chatting />} />
              <Route path={PATH.NEW_PRODUCT} element={<NewProduct />} />
              <Route path={PATH.PRODUCT_DETAIL}>
                <Route path={':id'} element={<ProductDetail />} />
              </Route>
            </Route>
            <Route path={PATH.LOGIN_LOADING} element={<LoginLoading />} />
            <Route path={PATH.MY_ACCOUNT} element={<MyAccount />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
