import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const SearchHeader = () => {
  return (
    <S.SearchHeader>
      <S.CloseButton>닫기</S.CloseButton>
      <S.SearchBar>
        <S.Label htmlFor="search-input">
          <Icon name={ICON_NAME.SEARCH} />
        </S.Label>
        <S.Input name="search-input" placeholder="동명(읍,면)으로 검색 (ex. 서초동)" />
      </S.SearchBar>
    </S.SearchHeader>
  );
};

export default SearchHeader;
