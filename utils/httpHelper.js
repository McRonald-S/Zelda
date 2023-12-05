import axios from "axios";

var baseUrl = "https://zelda.fanapis.com/api"
export const get = async (resource, limit = 999, page = 0) => {

    var url = `${baseUrl}/${resource}`;
    url += limit != 0 ? `?limit=${limit}` : '' + page != 0 ? `&page=${page}` : '';
    var response = await axios.get(url);
    var data = response.data;

    return data.data;
} 