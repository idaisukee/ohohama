// src/theme/terminal.ts

import { semantic } from "../semantic";

export const terminalColors = {
  "terminal.background": semantic.surface.background,
  "terminal.foreground": semantic.text.primary,

  "terminalCursor.background": semantic.cursor.foreground,
  "terminalCursor.foreground": semantic.cursor.background,

  "terminal.selectionBackground": semantic.selection.background,
  "terminal.inactiveSelectionBackground":
    semantic.selection.inactiveBackground,

  "terminal.ansiBlack": semantic.terminal.normal.black,
  "terminal.ansiRed": semantic.terminal.normal.red,
  "terminal.ansiGreen": semantic.terminal.normal.green,
  "terminal.ansiYellow": semantic.terminal.normal.yellow,
  "terminal.ansiBlue": semantic.terminal.normal.blue,
  "terminal.ansiMagenta": semantic.terminal.normal.magenta,
  "terminal.ansiCyan": semantic.terminal.normal.cyan,
  "terminal.ansiWhite": semantic.terminal.normal.white,

  "terminal.ansiBrightBlack": semantic.terminal.bright.black,
  "terminal.ansiBrightRed": semantic.terminal.bright.red,
  "terminal.ansiBrightGreen": semantic.terminal.bright.green,
  "terminal.ansiBrightYellow": semantic.terminal.bright.yellow,
  "terminal.ansiBrightBlue": semantic.terminal.bright.blue,
  "terminal.ansiBrightMagenta": semantic.terminal.bright.magenta,
  "terminal.ansiBrightCyan": semantic.terminal.bright.cyan,
  "terminal.ansiBrightWhite": semantic.terminal.bright.white,
} as const;
