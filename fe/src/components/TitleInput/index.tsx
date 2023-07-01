import { useState } from 'react';
import { ICON_NAME, REQUEST_URL } from '@constants/index';
import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';
import Icon from '@components/common/Icon';
import * as S from './style';

interface TitleInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CategoriesData {
  categories: { id: number; name: string }[];
}

const TitleInput = ({ onChange }: TitleInputProps) => {
  const [selectCategory, setSelectCategory] = useState(0);
  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET.toString(),
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { data } = useFetch<CategoriesData>({
    url: `${REQUEST_URL.CATEGORY_RECOMMENDS}?title='`,
    options,
  });

  const selectCategoryHandler = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    setSelectCategory(idx);
  };

  return (
    <S.TitleInputLayout>
      <S.TitleInput placeholder="글 제목" onChange={onChange}></S.TitleInput>

      <S.CategoryLayout>
        <S.CategoryList>
          {data?.categories.map(({ id, name }, idx) => (
            <S.CategoryItem
              key={id}
              className={selectCategory === idx ? 'active' : ''}
              onClick={(e) => selectCategoryHandler(e, idx)}
            >
              {name}
            </S.CategoryItem>
          ))}
        </S.CategoryList>
        <Icon name={ICON_NAME.CHEVRON_RIGHT} />
      </S.CategoryLayout>
    </S.TitleInputLayout>
  );
};

export default TitleInput;
