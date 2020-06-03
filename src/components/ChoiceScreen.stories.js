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


export const standard = () => ({
    Component: ChoiceScreen,
    props: {
        textInput: textInputData,
    }
});

export const error = () => ({
    Component: ChoiceScreen,
    props: {
        error: true,
    },
});