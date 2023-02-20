import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from './vars.css';

// HOVER
export const iconHover = style({
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.g_trans1,
      cursor: 'pointer',
    },
  },
});

// TRANSITION
export const showWithScale = style({
  transition: 'all 0.8s ease',
  transform: 'scale(1)',
});

// CURSORS

export const cursor = recipe({
  variants: {
    cursor: {
      resize: {
        cursor: 'se-resize',
      },
      grab: {
        cursor: 'grab',
      },
      grabbing: {
        cursor: 'grabbing',
      },
      pointer: {
        selectors: {
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  },
});

export const pointer = style({
  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const wordBreak = recipe({
  variants: {
    wordBreak: {
      breakAll: {
        wordBreak: 'break-all',
      },
      keepAll: {
        wordBreak: 'keep-all',
      },
    },
  },
});
