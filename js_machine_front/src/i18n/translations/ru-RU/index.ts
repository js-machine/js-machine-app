import { errorIndicator } from './error-indicator';
import { pages } from './pages';
import { signIn } from './sign-in';
import { signUp } from './sign-up';

export const ru_RU = {
  ...errorIndicator, ...pages, ...signIn, ...signUp,
};
