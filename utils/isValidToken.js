export const isTokenValid = (createdAt, time) => {
  const now = new Date();
  const tokenCreatedAt = new Date(createdAt);
  const timeDifference = now - tokenCreatedAt;
  const oneHourInMilliseconds = time * 1000;
  return timeDifference < oneHourInMilliseconds;
};
