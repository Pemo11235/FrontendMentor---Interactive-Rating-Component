const COLORS = {
  primary: 'hsl(25, 97%, 53%)',
  neutral: {
    white: 'hsl(0, 0%, 100%)',
    grey: {
      light: 'hsl(217,12%, 63%)',
      medium: 'hsl(216, 12%, 54%)',
    },
    blue: {
      dark: 'hsl(213, 19%, 18%)',
      darker: 'hsl(216,12%,8%)',
    }
  }
}

const TYPOGRAPHY = {
  font: {
    family : 'Overpass',
    weight: {
      light: 400,
      bold: 700,
    },
    size: {
      body: '15px',
    }
  }
}

const styles = {
  container: { backgroundColor: '#232323' },
  ratingContainer: {
    backgroundImage: `linear-gradient(${COLORS.neutral.blue.dark}, ${COLORS.neutral.blue.darker})`,
    color: COLORS.neutral.white,
  },
  iconButton: {
    backgroundColor: COLORS.neutral.blue.dark,
    color: COLORS.neutral.grey.light,
  },
  paragraph: {
    color: COLORS.neutral.grey.light,
  },
  submit: {
    backgroundColor: COLORS.primary,
  },
}

export {COLORS, TYPOGRAPHY, styles}
