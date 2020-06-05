import { writable } from 'svelte/store';


const domainBox = () => {
  // creates a new writable store populated with some initial data

  const textInputLike = {
    id: "1",
    label: "What domain name would you like?",
    placeholder: "yourwebsite.com... ",
    value: "",
};
const textInputYour = {
    id: "2",
    label: "What is your domain name?",
    placeholder: "yourwebsite.com... ",
    value: "",
};

const title = {
    id: '1',
    title: 'Do you need a domain name?',
    text: "Domain names are how users access your website.",
};

const cards = [
    { id: "1", title: "Yes" },
    { id: "2", title: "No" },
    { id: "3", title: "Don't Know" },
];
  const { subscribe, update } = writable({title, cards, textInputLike, textInputYour});


  return {
    subscribe,
    // method to archive a card, think of a action with redux or Vuex
    choose: id =>
      update(cards =>
        cards.map(card => (card.id === id ? { ...card, active: true } : card))
      ),
    // method to archive a card, think of a action with redux or Vuex
    
  };
};




export const domainStore = domainBox();


// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();