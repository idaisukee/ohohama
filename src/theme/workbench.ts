// src/theme/workbench.ts

import { semantic } from "../semantic";

export const workbenchColors = {
  /*
   * General
   */
  "focusBorder": semantic.focus.border,
  "foreground": semantic.text.primary,
  "descriptionForeground": semantic.text.secondary,
  "disabledForeground": semantic.text.disabled,

  /*
   * Activity bar
   */
  "activityBar.background": semantic.surface.elevated,
  "activityBar.foreground": semantic.accent.strong,
  "activityBar.inactiveForeground": semantic.text.muted,
  "activityBar.border": semantic.surface.borderMuted,

  "activityBarBadge.background": semantic.accent.primary,
  "activityBarBadge.foreground": semantic.text.onAccent,

  /*
   * Side bar
   */
  "sideBar.background": semantic.surface.elevated,
  "sideBar.foreground": semantic.text.primary,
  "sideBar.border": semantic.surface.borderMuted,

  "sideBarTitle.foreground": semantic.text.primary,

  "sideBarSectionHeader.background": semantic.surface.sunken,
  "sideBarSectionHeader.foreground": semantic.text.primary,
  "sideBarSectionHeader.border": semantic.surface.borderMuted,

  /*
   * Tabs
   */
  "editorGroupHeader.tabsBackground": semantic.surface.elevated,
  "editorGroupHeader.tabsBorder": semantic.surface.borderMuted,

  "tab.activeBackground": semantic.surface.background,
  "tab.activeForeground": semantic.text.primary,
  "tab.activeBorderTop": semantic.accent.primary,

  "tab.inactiveBackground": semantic.surface.elevated,
  "tab.inactiveForeground": semantic.text.secondary,

  "tab.hoverBackground": semantic.surface.hover,
  "tab.border": semantic.surface.borderMuted,

  /*
   * Lists
   */
  "list.activeSelectionBackground":
    semantic.selection.activeBackground,

  "list.activeSelectionForeground":
    semantic.selection.activeForeground,

  "list.inactiveSelectionBackground":
    semantic.selection.inactiveBackground,

  "list.inactiveSelectionForeground":
    semantic.selection.inactiveForeground,

  "list.hoverBackground": semantic.surface.hover,
  "list.hoverForeground": semantic.text.primary,

  "list.focusOutline": semantic.focus.border,

  /*
   * Inputs
   */
  "input.background": semantic.surface.sunken,
  "input.foreground": semantic.text.primary,
  "input.border": semantic.surface.border,
  "input.placeholderForeground": semantic.text.muted,

  "inputValidation.errorBorder": semantic.status.error,
  "inputValidation.warningBorder": semantic.status.warning,
  "inputValidation.infoBorder": semantic.status.info,

  /*
   * Buttons
   */
  "button.background": semantic.accent.primary,
  "button.foreground": semantic.text.onAccent,
  "button.hoverBackground": semantic.accent.strong,

  "button.secondaryBackground": semantic.surface.sunken,
  "button.secondaryForeground": semantic.text.primary,
  "button.secondaryHoverBackground": semantic.surface.hover,

  /*
   * Widgets
   */
  "widget.border": semantic.surface.border,
  "editorWidget.background": semantic.surface.elevated,
  "editorWidget.foreground": semantic.text.primary,
  "editorWidget.border": semantic.surface.border,
} as const;
