const getGearColor = (num: number) => {
  if (num > 200) {
    return '#8F30DF';
  }
  if (num > 190) {
    return '#0059E3';
  }
  return '#00FD3A';
};

export default getGearColor;
