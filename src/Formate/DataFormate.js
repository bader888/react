export function DateToString(dateTimeString) {
  const date = new Date(dateTimeString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function ChangeDateToMMDDYYformate(date) { 
  if(String(date).indexOf("T") === -1)
    return date;
  return String(date).substring(0, String(date).indexOf("T"));
}
