const {
  themeColors,
  oneLayerWithPixelAdding,
  themeFontFamily,
  oneLayerWithNoPixel,
  themeShadowBox,
  themeLetterSpacing,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('./utils/tailwind/tailwindHelpers.js');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  safelist: [
    {
      pattern: /text-(center|inherit|justify|left|right|start|end)/,
    },
  ],
  theme: {
    colors: {
      // Colors extracted from the figma tokens file
      ...themeColors(),
      // Primary Colors
      primary: 'rgba(var(--color-primary), <alpha-value>)',
      'primary-contrast': 'rgba(var(--color-primary-contrast), 1)',
      'primary-hover': 'rgba(var(--color-primary-hover), 1)',
      'primary-ghost-hover': 'rgba(var(--color-primary), 0.13)',
      'primary-border': 'rgba(var(--color-primary), 0.7)',
      // Secondary Colors
      secondary: 'rgba(var(--color-secondary), <alpha-value>)',
      'secondary-contrast': 'rgba(var(--color-secondary-contrast), 1)',
      'secondary-hover': 'rgba(var(--color-secondary-hover), 1)',
      'secondary-ghost-hover': 'rgba(var(--color-secondary), 0.13)',
      'secondary-border': 'rgba(var(--color-secondary), 0.7)',
      'primary-text': 'rgba(var(--color-text), 1)',
      'secondary-text': 'rgba(var(--color-text), 0.6)',
      'disabled-text': 'rgba(var(--color-text), 0.3)',
      // Background Colors
      background: 'rgba(var(--color-background), <alpha-value>)',
      'background-surface': 'rgba(var(--color-background-surface), 1)',
      // Neutral Colors
      neutral: 'rgba(var(--color-neutral), <alpha-value>)',
      'neutral-light': 'rgba(var(--color-neutral), 0.6)',
      'neutral-lighter': 'rgba(var(--color-neutral), 0.3)',
      'neutral-fade': 'rgba(var(--color-neutral), 0.1)',
      // Error Colors
      error: 'rgba(var(--color-error), <alpha-value>)',
      'error-contrast': 'rgba(var(--color-error-contrast), 1)',
      'error-hover': 'rgba(var(--color-error-hover), 1)',
      'error-ghost-hover': 'rgba(var(--color-error), 0.13)',
      'error-border': 'rgba(var(--color-error), 0.7)',
      'error-content': 'rgba(var(--color-error-content), 1)',
      'error-background': 'rgba(var(--color-error), 0.1)',
      // Info Colors
      info: 'rgba(var(--color-info), <alpha-value>)',
      'info-contrast': 'rgba(var(--color-info-contrast), 1)',
      'info-hover': 'rgba(var(--color-info-hover), 1)',
      'info-ghost-hover': 'rgba(var(--color-info), 0.13)',
      'info-border': 'rgba(var(--color-info), 0.7)',
      'info-content': 'rgba(var(--color-info-content), 1)',
      'info-background': 'rgba(var(--color-info), 0.1)',
      // Warning Colors
      warning: 'rgba(var(--color-warning), <alpha-value>)',
      'warning-contrast': 'rgba(var(--color-warning-contrast), 1)',
      'warning-hover': 'rgba(var(--color-warning-hover), 1)',
      'warning-ghost-hover': 'rgba(var(--color-warning), 0.13)',
      'warning-border': 'rgba(var(--color-warning), 0.7)',
      'warning-content': 'rgba(var(--color-warning-content), 1)',
      'warning-background': 'rgba(var(--color-warning), 0.1)',
      // Success Colors
      success: 'rgba(var(--color-success), <alpha-value>)',
      'success-contrast': 'rgba(var(--color-success-contrast), 1)',
      'success-hover': 'rgba(var(--color-success-hover), 1)',
      'success-ghost-hover': 'rgba(var(--color-success), 0.13)',
      'success-border': 'rgba(var(--color-success), 0.7)',
      'success-content': 'rgba(var(--color-success-content), 1)',
      'success-background': 'rgba(var(--color-success), 0.1)',
      // Action Colors
      action: 'rgba(var(--color-action), <alpha-value>)',
      'action-disabled': 'rgba(var(--color-action), 0.5)',
      'action-background-selected': 'rgba(var(--color-action), 0.3)',
      'action-background-disabled': 'rgba(var(--color-action), 0.15)',
      'action-background-hover': 'rgba(var(--color-action), 0.1)',
      // Misc Colors
      'misc-snackbar-bg': 'rgba(var(--color-misc), 0.8)',
      'misc-overlay': 'rgba(var(--color-misc), 0.6)',
      'misc-standard-border': 'rgba(var(--color-misc), 0.3)',
      'misc-divider': 'rgba(var(--color-misc), 0.1)',
      'misc-rating': 'rgba(var(--color-misc-rating), <alpha-value>)',
      white: 'rgb(255, 255, 255)',
      black: 'rgb(0, 0, 0)',
      transparent: 'transparent',
    },
    fontSize: oneLayerWithPixelAdding('fontSize'),
    lineHeight: oneLayerWithPixelAdding('lineHeight'),
    fontFamily: themeFontFamily(),
    fontWeight: oneLayerWithNoPixel('fontWeight'),
    spacing: oneLayerWithPixelAdding('spacing'),
    borderRadius: {
      ...oneLayerWithPixelAdding('brd-radius'),
      full: '50%',
    },
    opacity: oneLayerWithNoPixel('opacity'),
    borderWidth: oneLayerWithPixelAdding('brd-width'),
    boxShadow: themeShadowBox(),
    letterSpacing: themeLetterSpacing(),
    screens: {
      small: '0',
      medium: '600px',
      large: '900px',
      xlarge: '1301px',
    },
    scale: {
      '0': '0',
      '100': '1',
    },
  },
  variants: {},
  plugins: [],
};
