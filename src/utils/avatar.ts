export const getAvatarUrl = (value: string) => {
  if (!value) {
    return '/assets/images/users/avatar-thumb-1.png';
  }
  return `data:image/jpeg;base64,${value}`;
};
