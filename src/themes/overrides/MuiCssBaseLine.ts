// ==============================|| OVERRIDES - ALERT TITLE ||============================== //

export default function MuiCssBaseLine() {
  return {
    MuiCssBaseline: {
      styleOverrides: `
    @font-face {
      font-family: 'yekan-bakh';
      src: url('/assets/fonts/yekan-bakh/YekanBakh-VF.ttf') format('truetype');
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
      font-family: 'noto-Arabic';
      src: url('/assets/fonts/noto-Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf') format('truetype');
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
        font-family: 'roboto';
        src: url('/assets/fonts/roboto/Roboto-Medium.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }
    @font-face {
        font-family: 'manrope';
        src: url('/assets/fonts/manrope/Manrope-VariableFont_wght.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }`,
    },
  };
}
