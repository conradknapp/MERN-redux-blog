export const convertToDate = date => {
  return String(new Date(date).toDateString().slice(4));
};

export const formatCategories = string => {
  return string.replace(/\s+/g, " / ");
};
