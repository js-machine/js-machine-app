// import { EN_US } from './translations/en-US';
import { RU_RU } from './translations/ru-RU';

import { createIntl, createIntlCache } from 'react-intl';
import { MessageFormatElement, parse } from 'intl-messageformat-parser';

function convertMessages(messages: Record<string, string>) {
  return Object.keys(messages).reduce(
    (all: Record<string, MessageFormatElement[]>, k) => {
      all[k] = parse(messages[k]);
      return all;
    },
    {},
  );
}

// const enUsMessages = convertMessages(EN_US);
const ruRuMessages = convertMessages(RU_RU);

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export const intl = createIntl(
  {
    locale: 'ru',
    messages: ruRuMessages,
  },
  cache,
);
