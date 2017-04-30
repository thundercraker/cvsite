const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

const DateToMonthYear = (date: Date): string => {
    return monthNames[date.getMonth()] + " " + date.getFullYear();
}

export {DateToMonthYear}