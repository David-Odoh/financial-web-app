export const maskCreditCard = (
  cardNumber: string | undefined,
  maskLength = 6
): string | undefined => {
  if (!cardNumber || cardNumber.length <= maskLength + 2) return undefined;

  const visibleStart = cardNumber.slice(0, 4);
  const visibleEnd = cardNumber.slice(-4);
  const maskedSection = "*".repeat(maskLength);

  const remainingLength = cardNumber.length - (4 + 4 + maskLength);
  const spacer = " ".repeat(Math.max(remainingLength, 0));

  return `${visibleStart} ${maskedSection} ${spacer}${visibleEnd}`;
};
