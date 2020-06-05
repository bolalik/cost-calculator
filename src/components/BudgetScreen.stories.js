// src/components/BudgetScreen.stories.js
import BudgetScreen from './BudgetScreen.svelte';

export default {
    title: 'BudgetScreen',
    Component: BudgetScreen,
};




const titleData = {
    id: '1',
    title: 'What is your budget?',
    text: "A budget limits the scope of work, never the quality.",
};

 const defaultCardsData = [
    {  id: "1", title: "$0 - $1,999" },
    {  id: "2", title: "$2,000 - $4,999" },
    {  id: "3", title: "$5,000 - $10,000+" },
  ];
  

export const standard = () => ({
    Component: BudgetScreen,
    props: {
        cards: defaultCardsData,
        title: titleData
    }
});

export const error = () => ({
    Component: BudgetScreen,
    props: {
        error: true,
    },
});