// Color Pallette Array
export const CHART_COLORS = [
  '#9E77ED', '#FEA500',
  '#6F52ED', '#FFA726', 
  '#66BB6A'
];

/*  Note :  Can make only one constant for #265A62 Palette but keeping 
    separate as a future use case, incase different color is required for button or icon
*/
export const MAIN_TITLE_COLOR = '#101828';
export const CLOSE_ICON_COLOR = '#265A62';
export const COLOR_CTA_LINK = '#265A62';
export const OPEN_DIALOG_BUTTON_COLOR = '#265A62';
export const CARD_BG_COLOR = '#E4E7EC'

// Constants for UI Text
export const HOME_SCREEN_TITLE = "Github Repository Language";
export const OPEN_MODAL_BUTTON = "Open Pie Chart";
export const TOOLTIP_LABEL = 'Usage Percentage';
export const TITLE_TEXT_MODAL = "Github Repository Language Pie Chart";
export const REPO_SELECT_LABEL = "Select Github Repository";
export const DROPDOWN_PLACEHOLDER = "Repository Name"
export const DETAILS_TITLE = "Language Details"
export const VIEW_DETAILS_TEXT = "View details"


// Errors
export const ERROR_TEXT = "Error fetching the repositories";

// APIs
export const GIT_HUB_API = 'https://api.github.com/search/repositories';
export const API_OPTIONS = {
    params: {
      q: 'language:TypeScript',
      sort: 'stars',
      order: 'desc',
      per_page: 10,
    },
  }

