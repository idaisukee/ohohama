// src/theme/editor.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const editorColors = {
  "editor.background": semantic.surface.background,
  "editor.foreground": semantic.text.primary,

  "editorCursor.foreground": semantic.text.primary,

  "editor.selectionBackground": semantic.selection.background,
  "editor.selectionForeground": semantic.selection.foreground,
  "editor.inactiveSelectionBackground": semantic.selection.inactiveBackground,

  "editorLineNumber.foreground": semantic.text.muted,
  "editorLineNumber.activeForeground": semantic.text.primary,

  "editorWhitespace.foreground": semantic.surface.borderMuted,

  "editorIndentGuide.background1": semantic.surface.borderMuted,
  "editorIndentGuide.activeBackground1": semantic.surface.border,

  "editorRuler.foreground": semantic.surface.borderMuted,

  "editor.findMatchBackground": semantic.search.matchBackground,
  "editor.findMatchForeground": semantic.search.matchForeground,

  "editor.findMatchHighlightBackground":
    semantic.search.highlightBackground,

  "editor.wordHighlightBackground":
    semantic.selection.wordBackground,

  "editor.wordHighlightStrongBackground":
    semantic.selection.wordStrongBackground,

  "editorBracketMatch.background":
    semantic.selection.bracketBackground,

  "editorBracketMatch.border":
    semantic.focus.border,
    "editorhighlight.background": semantic.selection.wordBackground,
    "editorhighlight.border": semantic.focus.border
} satisfies ThemeColors;
