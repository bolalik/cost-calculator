// src/components/ChoiceScreen.stories.js
import ChoiceScreen from './ChoiceScreen.svelte';

export default {
    title: 'ChoiceScreen',
    Component: ChoiceScreen,
};



const textInputData = {
    id: "1",
    label: "Don't see what you’re looking for?",
    placeholder: "Describe your site...",
    value: "",
};

const titleData = {
    id: '1',
    title: 'What are your top goals?',
    text: "Select all that apply. If something interests you but isn't a top priority, no worries. You can add all our features to any template.",
};

const choiceScreenData = {
    textInput: textInputData,
    title: titleData
}


export const standard = () => ({
    Component: ChoiceScreen,
    props: {
        ...choiceScreenData,
        title: titleData
    }
});

export const error = () => ({
    Component: ChoiceScreen,
    props: {
        error: true,
    },
});