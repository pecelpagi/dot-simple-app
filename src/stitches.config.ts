import { createStitches } from '@stitches/react';

export const { theme, styled, css, globalCss, keyframes } = createStitches({
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
    }
});