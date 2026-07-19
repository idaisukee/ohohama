// src/theme/status.ts

import { semantic } from "../semantic";

export const statusColors = {
  /*
   * Status bar
   */
  "statusBar.background": semantic.accent.subtle,
  "statusBar.foreground": semantic.text.primary,
  "statusBar.border": semantic.surface.borderMuted,

  "statusBar.debuggingBackground": semantic.status.warning,
  "statusBar.debuggingForeground": semantic.text.onAccent,

  "statusBar.noFolderBackground": semantic.surface.sunken,
  "statusBar.noFolderForeground": semantic.text.primary,

  /*
   * Notifications
   */
  "notifications.background": semantic.surface.elevated,
  "notifications.foreground": semantic.text.primary,
  "notifications.border": semantic.surface.border,

  "notificationsErrorIcon.foreground": semantic.status.error,
  "notificationsWarningIcon.foreground": semantic.status.warning,
  "notificationsInfoIcon.foreground": semantic.status.info,

  /*
   * Diagnostics
   */
  "editorError.foreground": semantic.status.error,
  "editorWarning.foreground": semantic.status.warning,
  "editorInfo.foreground": semantic.status.info,
  "editorHint.foreground": semantic.status.hint,

  "problemsErrorIcon.foreground": semantic.status.error,
  "problemsWarningIcon.foreground": semantic.status.warning,
  "problemsInfoIcon.foreground": semantic.status.info,
} as const;
