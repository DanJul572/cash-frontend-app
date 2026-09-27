export type ErrorPagePropsType = {
  /** Replaces the page's default message. */
  message?: string;
};

export type Error500PagePropsType = ErrorPagePropsType & {
  /** Details listed under the message, e.g. invalid config keys. */
  errors?: string[];
};
