export const onInvalidSubmit = errors => {
  if (import.meta.env.DEV) {
    console.log('🚀 ~ Fields Errors', errors);
  }
};

export const isAllNumbers = (input: string) => {
  if (!input) {
    return true;
  }

  const regex = /^[0-9\u06F0-\u06F9\u0660-\u0669]+$/;

  return regex.test(input);
};

export const getFileType = (file: File | null) => {
  if (!file) return null;
  if (file.type.startsWith('image/')) return 'image';
  if (file.type.startsWith('video/')) return 'video';
  if (file.type.startsWith('audio/')) return 'audio';
  return 'file';
};
