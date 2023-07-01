const getTimeStamp = (time: Date) => {
  const TIME_UNIT = {
    SECONDS: 60,
    MINUTES: 60,
    HOURS: 24,
    ONE_DAY: 1,
    ONE_WEEK: 7,
  };

  const now = new Date();
  const diffInMilliseconds = now.getTime() - time.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / TIME_UNIT.SECONDS);
  const diffInHours = Math.floor(diffInMinutes / TIME_UNIT.MINUTES);
  const diffInDays = Math.floor(diffInHours / TIME_UNIT.HOURS);

  if (diffInDays > 2 * TIME_UNIT.ONE_WEEK) {
    return time.toLocaleDateString();
  }
  if (diffInDays >= TIME_UNIT.ONE_WEEK) {
    return `${Math.floor(diffInDays / TIME_UNIT.ONE_WEEK)}주 전`;
  }
  if (diffInDays >= TIME_UNIT.ONE_DAY) {
    return `${diffInDays}일 전`;
  }
  if (diffInHours >= 1) {
    return `${diffInHours}시간 전`;
  }
  if (diffInMinutes >= 1) {
    return `${diffInMinutes}분 전`;
  }
  if (diffInSeconds >= 0) {
    return `${diffInSeconds}초 전`;
  }
};

const getTextWithTimeStamp = ({ text, time }: { text: string; time: string }) => {
  if (!text || !time) {
    return '';
  }

  return `${text} · ${getTimeStamp(new Date(time))}`;
};

const formatMoney = (money: number) => {
  if (money <= 0) {
    return '가격 미정';
  }

  return `${money.toLocaleString()}원`;
};

const getRegion = (address: string) => {
  return address.split(' ').at(-1) ?? '';
};

const parseJWT = (token: string) => {
  const parts = token.split('.');

  if (parts.length !== 3) return null;

  try {
    const decodedToken = {
      header: JSON.parse(atob(parts[0])),
      payload: JSON.parse(atob(parts[1])),
      signature: parts[2],
    };

    return decodedToken;
  } catch (error) {
    return null;
  }
};

const getUserInfo = (token: string) => {
  return parseJWT(token)?.payload.userProfile;
};

export { getTextWithTimeStamp, formatMoney, getRegion, getUserInfo };
