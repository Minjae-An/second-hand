import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { ICON_NAME, PATH, REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import Header from '@components/common/Header';
import ProductList from '@components/ProductList';
import TabBar from '@components/TabBar';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface RegionsData {
  regions: Region[];
}

const Home = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { data: regionsData } = useFetch<RegionsData>({
    url: REQUEST_URL.USER_REGIONS,
    options,
  });

  const goToTopHandler = () => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header type="home" regions={regionsData?.regions} />
      <S.ProductListLayout ref={listRef}>
        {regionsData && <ProductList regionId={regionsData?.regions[0].id} />}
      </S.ProductListLayout>

      <TabBar activeTab="home" />

      <S.GoToTopButton onClick={goToTopHandler}>
        <Icon name={ICON_NAME.ARROW_UP} />
      </S.GoToTopButton>

      <Link to={PATH.NEW_PRODUCT}>
        <S.NewProductButton buttonType="circle">
          <Icon name={ICON_NAME.PLUS} />
        </S.NewProductButton>
      </Link>
    </>
  );
};

export default Home;
