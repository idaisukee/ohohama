// src/theme/index.ts

import { debugColors } from "./debug.js";
import { editorColors } from "./editor.js";
import { gitColors } from "./git.js";
import { statusColors } from "./status.js";
import { terminalColors } from "./terminal.js";
import { tokenColors } from "./token-colors.js";
import { workbenchColors } from "./workbench.js";

export const colors = {
  ...workbenchColors,
  ...editorColors,
  ...terminalColors,
  ...gitColors,
  ...debugColors,
  ...statusColors,
} as const;

export { tokenColors };
