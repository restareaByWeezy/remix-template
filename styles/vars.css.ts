import { createGlobalTheme } from '@vanilla-extract/css';

// THEME이 여러 개 늘어날 경우 createThemeContract를 사용하면 됩니다. //
// https://vanilla-extract.style/documentation/theming/#code-splitting-themes

export const vars = createGlobalTheme(':root', {
  breakpoint: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  space: {
    none: '0',
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '28px',
    xxxl: '32px',
    card_gap: '20px',
    container_space: '24px',
    main_padding: '48px',
  },
  borderRadius: {
    full: '9999px',
    sm: '5px',
    md: '10px',
    lg: '15px',
    xl: '20px',
  },
  fontFamily: {
    body: 'Pretendard-Regular, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
  },
  fontSize: {
    headline: '52px',
    h1: '32px',
    h2: '26px',
    h3: '20px',
    h4: '16px',
    body1: '14px',
    body2: '12px',
    body3: '11px',
    caption: '10px',
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
  },
  lineHeight: {},
  zIndices: {
    GNB: '1000',
    HEADER: '1000',
    DROPDOWN: '1001',
    CHECK_ICON: '11',
    CHECK_BOX: '10',
    TABLE_HEADER: '10',
    FIRST_DRAWER: '1002',
    SECOND_DRAWER: '1003',
    DRAWEROVERLAY: '1001',
    WIDGETINPUT: '1',
  },
  color: {
    primary: '#6D55CF',
    secondary: '#66659A',
    // sidebar: '#F2F2FD',
    sidebar: '#140A33',
    // GrayScale
    gray9: '#0a0a0a',
    gray8: '#1b1d1f',
    gray7: '#26282b',
    gray6: '#464c53',
    gray5: '#73787f',
    gray4: '#9ea4aa',
    gray3: '#c9cdd2',
    gray2: '#e8ebed',
    gray1: '#f7f8f9',

    // BlueScale
    blue9: '#0C2C70',
    blue8: '#153F88',
    blue7: '#2159A9',
    blue6: '#3078CA',
    blue5: '#429AEB',
    blue4: '#6FBAF3',
    blue3: '#8DD0F9',
    blue2: '#B4E5FD',
    blue1: '#D9F4FE',

    // Gray Trans
    g_trans4: 'rgba(176, 179, 188, 0.7)',
    g_trans3: 'rgba(176, 179, 188, 0.5)',
    g_trnas2: 'rgba(176, 179, 188, 0.3)',
    g_trans1: 'rgba(176, 179, 188, 0.1)',

    // TextColor
    primary_text: '#1b1d1f', //Gray 8
    secondary_text: '#464c53', //Gray 6
    tertiary_text: '#9ea4aa', //Gray 4
    white_text: '#FCF9FF',
    white: '#ffffff',

    // btn
    primary_btn: '#6D55CF',
    primary_pressed: '#8164F5',
    // secondary_btn: '#797995',
    // secondary_pressed: '#7e7995',
    // tertiary_btn: '#E8EBED',
    // tertiary_pressed: '#C9CDD2',
    secondary_btn: '#464C53',
    secondary_pressed: '#26282B',
    tertiary_btn: '#E8EBED',
    tertiary_pressed: '#C9CDD2',

    //status
    success: '#00BFA5',
    warning: '#FFB300',
    error: '#FF3D00',
    info: '#429AEB',

    disabled: '#E8EBED',
    disabled_text: '#9EA4AA',
    disabled_btn: '#E8EBED',

    // border
    border: '#DFE3E5',
    border_focus: '#429AEB',
    border_error: '#FF3D00',
    border_success: '#00BFA5',
    border_warning: '#FFB300',
    border_info: '#429AEB',

    // background
    bg: '#ffffff',
    subBg: '#f4f6f8',
    darkBg: '#181818',

    // shadow
    shadow: '0 2px 8px rgb(0 0 0 / 15%)',
  },
});
