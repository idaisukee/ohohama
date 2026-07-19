// src/theme/debug.ts

import { semantic } from "../semantic.js";

export const debugColors = {
  "debugToolBar.background": semantic.surface.elevated,
  "debugToolBar.border": semantic.surface.border,

  "debugIcon.breakpointForeground": semantic.status.error,
  "debugIcon.breakpointDisabledForeground": semantic.text.disabled,
  "debugIcon.breakpointCurrentStackframeForeground":
    semantic.status.warning,

  "debugIcon.startForeground": semantic.status.success,
  "debugIcon.pauseForeground": semantic.status.warning,
  "debugIcon.stopForeground": semantic.status.error,
  "debugIcon.restartForeground": semantic.status.info,

  "editor.stackFrameHighlightBackground":
    semantic.status.info,

  "editor.focusedStackFrameHighlightBackground":
    semantic.status.info,
} as const;
