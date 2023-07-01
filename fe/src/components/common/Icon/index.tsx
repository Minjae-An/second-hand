import React from 'react';

import { ReactComponent as ArrowUp } from '@assets/arrowUp.svg';
import { ReactComponent as Camera } from '@assets/camera.svg';
import { ReactComponent as ChevronDown } from '@assets/chevronDown.svg';
import { ReactComponent as ChevronLeft } from '@assets/chevronLeft.svg';
import { ReactComponent as ChevronRight } from '@assets/chevronRight.svg';
import { ReactComponent as CircleFill } from '@assets/circleFill.svg';
import { ReactComponent as Ellipsis } from '@assets/ellipsis.svg';
import { ReactComponent as Hamburger } from '@assets/hamburger.svg';
import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as Keyboard } from '@assets/keyboard.svg';
import { ReactComponent as Like } from '@assets/like.svg';
import { ReactComponent as FullLike } from '@assets/fullLike.svg';
import { ReactComponent as Message } from '@assets/message.svg';
import { ReactComponent as Multiply } from '@assets/multiply.svg';
import { ReactComponent as Newspaper } from '@assets/newspaper.svg';
import { ReactComponent as Person } from '@assets/person.svg';
import { ReactComponent as Plus } from '@assets/plus.svg';
import { ReactComponent as Search } from '@assets/search.svg';
import { ReactComponent as RegionSetting } from '@assets/regionSetting.svg';

import { ICON_NAME } from '@constants/index';

export type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME];

interface IconProps {
  name: IconName;
  fill?: string;
}

const ICONS: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  [ICON_NAME.ARROW_UP]: ArrowUp,
  [ICON_NAME.CAMERA]: Camera,
  [ICON_NAME.CHEVRON_DOWN]: ChevronDown,
  [ICON_NAME.CHEVRON_LEFT]: ChevronLeft,
  [ICON_NAME.CHEVRON_RIGHT]: ChevronRight,
  [ICON_NAME.CIRCLE_FILL]: CircleFill,
  [ICON_NAME.ELLIPSIS]: Ellipsis,
  [ICON_NAME.HAMBURGER]: Hamburger,
  [ICON_NAME.HOME]: Home,
  [ICON_NAME.KEYBOARD]: Keyboard,
  [ICON_NAME.LIKE]: Like,
  [ICON_NAME.FULL_LIKE]: FullLike,
  [ICON_NAME.MESSAGE]: Message,
  [ICON_NAME.MULTIPLY]: Multiply,
  [ICON_NAME.NEWSPAPER]: Newspaper,
  [ICON_NAME.PERSON]: Person,
  [ICON_NAME.PLUS]: Plus,
  [ICON_NAME.SEARCH]: Search,
  [ICON_NAME.REGION_SETTING]: RegionSetting,
};

const Icon = ({ name, fill }: IconProps) => {
  const IconComponent = ICONS[name];

  if (IconComponent) {
    return <IconComponent fill={fill} />;
  }

  return null;
};

export default Icon;
