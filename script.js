import swapiGetter from "./swapiGetter.js";
import mockAxios from "axios";
import axios from "axios";


// get a star wars person by id and return their name
const swapiGetter = (id) =>
    axios.get(`http:swapi.dev/api/people/${id}/`).then((res) => res.data.name);

export default swapiGetter;
