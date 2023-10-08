const backgroundColor = "rgb(75, 75, 75)"
const textColor = "white"

export const dropdownStyles = {
  container: (styles) => ({
    ...styles,
    width: "20rem",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: backgroundColor,
    color: textColor,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? textColor : backgroundColor,
    color: isFocused ? backgroundColor : textColor,
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: backgroundColor,
    color: textColor,
  }),
  placeholder: (styles) => ({
    ...styles,
    color: textColor,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: textColor,
}),
}
