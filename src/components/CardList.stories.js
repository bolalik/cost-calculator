// src/components/CardList.stories.js
import CardList from "./CardList.svelte";
import { cardData, actionsData } from "./Card.stories";
export default {
  title: "CardList",
  excludeStories: /.*Data$/
};

export const defaultCardsData = [
  { ...cardData, id: "1", title: "Card 1" },
  { ...cardData, id: "2", title: "Card 2" },
  { ...cardData, id: "3", title: "Card 3" },
  { ...cardData, id: "4", title: "Card 4" },
  { ...cardData, id: "5", title: "Card 5" },
  { ...cardData, id: "6", title: "Card 6" }
];
export const withPinnedCardsData = [
  ...defaultCardsData.slice(0, 5),
  { id: "6", title: "Card 6 (pinned)", state: "TASK_PINNED" }
];

// default CardList state
export const Default = () => ({
  Component: CardList,
   props: {
    cards: defaultCardsData
  },
  on: {
    ...actionsData
  }
});
// cardlist with pinned cards
export const WithPinnedCards = () => ({
  Component: CardList,
  props: {
    cards: withPinnedCardsData
  },
  on: {
    ...actionsData
  }
});
// cardlist in loading state
export const Loading = () => ({
  Component: CardList,
  props: {
    loading: true
  },
});
// cardlist no cards
export const Empty = () => ({
  Component: CardList,
});