// semantic.ts

import { palette } from "./palette";

export const semantic = {
  background: palette.primary.background,
  foreground: palette.primary.foreground,

  accent: palette.normal.magenta,
  link: palette.bright.blue,
  border: palette.bright.black,

  error: palette.normal.red,
  warning: palette.normal.yellow,
  info: palette.normal.cyan,
  success: palette.normal.green,

  deleted: palette.normal.white,
  added: palette.normal.blue,
} as const;
