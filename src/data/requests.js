import axios from 'axios';
import parsers from './parsers';


const API_KEY = 'key2VypkexLEwn6Mj';


async function sections() {

    const response = await axios.get(`https://api.airtable.com/v0/app45mD8poMgU9xCJ/Table%201?api_key=${API_KEY}`);
    return parsers.posts(response.data)

}

export default{
    sections,
}