export const timestampFormatter = (createdAt: Date) => {
  const formatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short", dateStyle: "medium" });
  return formatter.format(createdAt);
};
