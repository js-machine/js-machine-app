import { digest } from './digest';
import { errorIndicator } from './error-indicator';
import { pages } from './pages';
import { signIn } from './sign-in';
import { signUp } from './sign-up';
import { update } from './update';

export const EN_US: Record<string, string> = {
  ...digest,
  ...errorIndicator,
  ...pages,
  ...signIn,
  ...signUp,
  ...update,
};
