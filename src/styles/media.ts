const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;

export default {
  custom: customMediaQuery,
  xxxl: customMediaQuery(1920),
  xxl: customMediaQuery(1700),
  xl: customMediaQuery(1360),
  xlg: customMediaQuery(1200),
  lg: customMediaQuery(992),
  md: customMediaQuery(768),
  sm: customMediaQuery(578),
  xsm: customMediaQuery(420),
};
