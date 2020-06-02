// src/components/card.stories.js
import Card from './Card.svelte';
import { action } from "@storybook/addon-actions";
export default {
  title: 'card',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChoice: action('onChoice'),
};

export const cardData = {
  id: '1',
  title: 'Test card',
  state: 'card_INBOX',
  active: false,
};

// default card state
export const Default = () => ({
  Component: Card,
  props: {
    card: cardData,
  },
  on: {
    ...actionsData,
  },
});
//  card Yes
export const Art = () => ({
  Component: Card,
  props: {
    card: {
      ...cardData,
      title: 'Art',
    },
  },
  on: {
    ...actionsData,
  },
});
//  card No
export const Education = () => ({
  Component: Card,
  props: {
    card: {
      ...cardData,
      title: 'Education',
    },
  },
  on: {
    ...actionsData,
  },
});

//  card Maybe
export const Maybe = () => ({
  Component: Card,
  props: {
    card: {
      ...cardData,
      title: "I don't know",
    },
  },
  on: {
    ...actionsData,
  },
});
