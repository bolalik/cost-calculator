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
    { id: "1", state: "domain", title: "Yes" },
    { id: "2", state: "domain", title: "No" },
    { id: "3", state: "domain", title: "Don't Know" },
];


export default { cards, title, textInputYour, textInputLike }