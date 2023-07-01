import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ICON_NAME, PATH } from '@constants/index';
import { getRegion } from '@utils/index';

import { useUserContext } from '@context/userContext';

import Icon from '@components/common/Icon';
import Dropdown from '@components/common/Dropdown';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface HomeHeaderProps {
  regions: Region[];
}

const HomeHeader = ({ regions }: HomeHeaderProps) => {
  const { isLoggedIn } = useUserContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const selectedRegion = useMemo(() => {
    const address = regions[0].name;
    const region = getRegion(address);

    return region;
  }, [regions]);

  const regionOptions = useMemo(() => {
    const regionOptions = regions.map(({ id, name }) => ({ id, value: getRegion(name) }));

    if (isLoggedIn) {
      return [
        ...regionOptions,
        {
          id: 'region-setting-button',
          value: '내 동네 설정하기',
          handler: () => navigate(PATH.REGION_SETTING),
        },
      ];
    }

    return regionOptions;
  }, [isLoggedIn, regions]);

  return (
    <S.HomeHeader>
      <S.DropdownToggleButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <span>{selectedRegion}</span>
        <Icon name={ICON_NAME.CHEVRON_DOWN} />
        {isDropdownOpen && <Dropdown selectedValue={selectedRegion} options={regionOptions}></Dropdown>}
      </S.DropdownToggleButton>

      <Link to={PATH.CATEGORY}>
        <Icon name={ICON_NAME.HAMBURGER} />
      </Link>
    </S.HomeHeader>
  );
};

export default HomeHeader;
