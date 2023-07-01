import HomeHeader from './HomeHeader';
import SalesHeader from './SalesHeader';
import SearchHeader from './SearchHeader';

interface Region {
  id: number;
  name: string;
}

interface HeaderProps {
  type: 'home' | 'sales' | 'search';
  regions?: Region[];
}

const Header = ({ type, regions }: HeaderProps) => {
  if (type === 'home' && regions) return <HomeHeader regions={regions} />;
  if (type === 'search') return <SearchHeader />;
  if (type === 'sales') return <SalesHeader />;

  return null;
};

export default Header;
