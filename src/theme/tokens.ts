/**
 * Options
 */

const neutrals = ['#000', '#fff']

const branding = {
  primary: '#eee',
  primary_light: '#fff',
  primary_on: '#000',

  secondary: '#eee',
  secondary_light: '#fff',
  secondary_on: '#000',
}

/**
 * Decisions
 */

type ThemeConfig = {
  background: string
  foreground: string
  text: string
}

const light: ThemeConfig = {
  background: neutrals[1],
  foreground: branding.primary,
  text: branding.primary_on,
}

const dark: ThemeConfig = light

export const themes = {
  light,
  dark,
}

export const tokens = {
  colors: {
    neutrals,
    black: '#000',
    white: '#FFF',
    // reds,
    // blues,
  },
  spacers: {
    horizontalScreenPadding: 16,
  },
}

export function getThemeConfig(mode: ThemeConfig) {
  return {
    colors: {
      ...tokens.colors,
      ...mode,
    },
  }
}
