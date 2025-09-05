export const linkMenuStyles = (
  pathname: string,
  linkname: string,
  colorMode: string,
) => {
  const bgColor = colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200';

  return {
    width: 200,

    '&': {
      background: pathname === linkname ? bgColor : 'none',
      transition: 'all .4s ease-in-out',
      textDecoration: 'none',
    },

    '&:hover': {
      textDecoration: 'none',
      background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
    },

    '&:active': {
      textDecoration: 'none',
      background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
    },
  };
};
