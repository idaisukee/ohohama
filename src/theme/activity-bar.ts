import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const activityBarColors = {
    "activityBar.background": semantic.background,
    "activityBar.foreground": semantic.active,
    "activityBar.inactiveForeground": semantic.inactive,
    "activityBarBadge.background": semantic.info,

    "activityBarBadge.foreground": semantic.foreground,
    "activityBar.border": semantic.border,


    "activityBar.activeBackground": semantic.background,
    "activityBar.activeBorder": semantic.border,
    "activityBar.activeFocusBorder": semantic.border,
    "activityBar.dropBorder": semantic.border,
    "activityBarTop.activeBackground": semantic.background,
    "activityBarTop.activeBorder": semantic.border,
    "activityBarTop.background": semantic.background,
    "activityBarTop.dropBorder": semantic.border,
    "activityBarTop.foreground": semantic.foreground,
    "activityBarTop.inactiveForeground": semantic.inactive,
} satisfies ThemeColors;
