const validateUrl = (text: string) => {
  try {
    new URL(text);
    return true;
  } catch (e) {
    return false;
  }
};

export { validateUrl };
