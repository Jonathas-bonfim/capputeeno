export const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export const { format: FormatDate } = new Intl.DateTimeFormat("pt-br", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  // timeStyle: "short",
});
