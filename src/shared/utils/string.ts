// String manipulation utilities

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.slice(0, length) + "..." : str;
};

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const formatCurrency = (
  value: number,
  currency: string = "Kz",
): string => {
  return `${value.toLocaleString("pt-AO")} ${currency}`;
};

export const formatDate = (date: Date, locale: string = "pt-AO"): string => {
  return date.toLocaleDateString(locale);
};

export const formatTime = (date: Date, locale: string = "pt-AO"): string => {
  return date.toLocaleTimeString(locale);
};

export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
