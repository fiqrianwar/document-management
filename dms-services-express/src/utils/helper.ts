function formatDate(
  dateString: Date,
  format: "yyyy_mm_dd" | "dd_MMM_yyyy" | "MMM_dd_yyyy" = "yyyy_mm_dd",
) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  switch (format) {
    case "yyyy_mm_dd":
      return `${year}_${month}_${day}`;
    case "dd_MMM_yyyy":
      return `${day} ${monthNames[date.getUTCMonth()]} ${year}`;
    case "MMM_dd_yyyy":
      return `${monthNames[date.getUTCMonth()]} ${day}, ${year}`;
    default:
      throw new Error("Unsupported format");
  }
}

export const Helper = {
  formatDate,
};
