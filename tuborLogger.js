export const tuborLogger = (messager, textColor = "red") => {
  const textStyle = `color: ${textColor}`;
  console.log(`%c${messager}`, textStyle);
};
