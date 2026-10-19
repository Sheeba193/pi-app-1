// *** Configurable variables for the app ***
// This file contains all the user-editable configuration values that can be updated when customizing the chatbot app.

export const APP_CONFIG = {
  // UPDATE: Set to the welcome message for the chatbot
  WELCOME_MESSAGE: "Hello! I'm your biblically songs writer, ask and connect systematically with Godly music Experts Worldwide.",

  // UPDATE: Set to the name of the chatbot app
  NAME: "Godly musical songs.",

  // UPDATE: Set to the description of the chatbot app
  DESCRIPTION: "The App to suggest, identify, name artists, musician(s), groups that sing biblical Godly and contemporaries music. Connects artists with producers/studios. Upload music for promotional/sales purposes",
} as const;

// Colors Configuration - UPDATE THESE VALUES BASED ON USER DESIGN PREFERENCES
export const COLORS = {
  // UPDATE: Set to the background color (hex format)
  BACKGROUND: "#FFFFFF",

  // UPDATE: Set to the primary color for buttons, links, etc. (hex format)
  PRIMARY: "#4B73FF",
} as const;
