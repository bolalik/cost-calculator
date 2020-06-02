// src/components/CardList.stories.js
import CardList from "./CardList.svelte";
import { cardData, actionsData } from "./Card.stories";
export default {
  title: "CardList",
  excludeStories: /.*Data$/
};

export const cardListData = {
  id: '1',
  title: "What's your site about?",
  text: 'This will help us find you some starting ideas and examples.',
}

export const defaultCardsData = [
  { ...cardData, id: "1", title: "Education" },
  { ...cardData, id: "2", title: "Fashion" },
  { ...cardData, id: "3", title: "Politics" },
  { ...cardData, id: "4", title: "Art" },
  { ...cardData, id: "5", title: "Consulting" },
  { ...cardData, id: "6", title: "Design" }
];


// default CardList state
export const Default = () => ({
  Component: CardList,
  props: {
    cardList: cardListData,
    cards: defaultCardsData
  },
  on: {
    ...actionsData
  }
});

export const TopGoals = () => ({
  Component: CardList,
  props: {
    cardList: {...cardListData,
    title: 'What are your top goals?',
    text: "Select all that apply. If something interests you but isn't a top priority, no worries. You can add all our features to any template."},
    cards: defaultCardsData
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