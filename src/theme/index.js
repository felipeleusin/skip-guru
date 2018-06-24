const breakpoints = ['568px', '736px', '1024px', '1200px']

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128]

const fonts = {
  sans: 'system-ui, sans-serif',
  mono: 'Menlo, monospace',
}

const margins = {
  xs: ['4vw', '4vw', '29px', '33px', '36px'],
  sm: ['6vw', '6vw', '43px', '49px', '54px'],
  md: ['8vw', '8vw', '58px', '66px', '72px'],
  lg: ['12vw', '12vw', '87px', '99px', '108px'],
  xl: ['16vw', '16vw', '116px', '136px', '144px'],
}

const colors = {
  red: '#E91431',
  lightRed: 'rgba(233, 20, 49, 0.3)',
}

const theme = {
  colors,
  breakpoints,
  space,
  fontSizes,
  fonts,
  margins,
}

export default theme
