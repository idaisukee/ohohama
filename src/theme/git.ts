// src/theme/git.ts

import { semantic } from "../semantic";

export const gitColors = {
  "gitDecoration.addedResourceForeground": semantic.git.added,
  "gitDecoration.modifiedResourceForeground": semantic.git.modified,
  "gitDecoration.deletedResourceForeground": semantic.git.deleted,
  "gitDecoration.renamedResourceForeground": semantic.git.renamed,
  "gitDecoration.untrackedResourceForeground": semantic.git.untracked,
  "gitDecoration.ignoredResourceForeground": semantic.git.ignored,
  "gitDecoration.conflictingResourceForeground": semantic.git.conflict,

  "diffEditor.insertedTextBackground": semantic.diff.insertedBackground,
  "diffEditor.removedTextBackground": semantic.diff.removedBackground,

  "diffEditor.insertedLineBackground":
    semantic.diff.insertedLineBackground,

  "diffEditor.removedLineBackground":
    semantic.diff.removedLineBackground,

  "diffEditor.diagonalFill": semantic.diff.diagonalFill,

  "editorGutter.addedBackground": semantic.git.added,
  "editorGutter.modifiedBackground": semantic.git.modified,
  "editorGutter.deletedBackground": semantic.git.deleted,
} as const;
