export const validateNumber = (value) => {
    return !isNaN(value);
  };
  
  export const validateText = (value) => {
    return !/\d/.test(value);
  };
  
  export const validateDate = (value) => {
    return !isNaN(Date.parse(value));
  };
  
  export const validateCellData = (value, type) => {
    switch (type) {
      case "number":
        return validateNumber(value) ? null : "Invalid number!";
      case "text":
        return validateText(value) ? null : "No numbers allowed!";
      case "date":
        return validateDate(value) ? null : "Invalid date!";
      default:
        return null;
    }
  };
  