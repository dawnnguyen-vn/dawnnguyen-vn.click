export const convertStringToURL = (string: string) => {
  return "#" + string.toLocaleLowerCase().replaceAll(" ", "-");
};

export const convertStringToId = (string: string) => {
  return string.toLocaleLowerCase().replaceAll(" ", "-");
};
