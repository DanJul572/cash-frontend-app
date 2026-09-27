export type ChangeAlternatePagePropsType = {
  /** Alternate token from the link that opened this page. */
  token?: string;
  /** Called when the token is missing or invalid, e.g. to send the user back to login. */
  onInvalidToken: () => void;
  /** Called after switching to the selected user. */
  onChangeAlternateSuccess: () => void;
};
