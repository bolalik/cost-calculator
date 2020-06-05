// src/components/DomainScreen.stories.js
import DomainScreen from './DomainScreen.svelte';

export default {
    title: 'DomainScreen',
    Component: DomainScreen,
};



const textInputLikeData = {
    id: "1",
    label: "What domain name would you like?",
    placeholder: "yourwebsite.com... ",
    value: "",
};
const textInputYourData = {
    id: "2",
    label: "What is your domain name?",
    placeholder: "yourwebsite.com... ",
    value: "",
};

const titleData = {
    id: '1',
    title: 'Do you need a domain name?',
    text: "Domain names are how users access your website.",
};

const defaultCardsData = [
    { id: "1", title: "Yes" },
    { id: "2", title: "No" },
    { id: "3", title: "Don't Know" },
];



export const standard = () => ({
    Component: DomainScreen,
    props: {
        textInputYour: textInputYourData,
        textInputLike: textInputLikeData,
        cards: defaultCardsData,
        title: titleData
    }
});

export const error = () => ({
    Component: DomainScreen,
    props: {
        error: true,
    },
});


