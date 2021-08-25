import axios from 'axios';

//const url = axios.create({baseURL : 'https://api.publicapis.org/entries?title=my'});

export function getEntries (){
    console.log("API call")
    return axios.get('https://api.publicapis.org/entries?title=my').then((res) => {
        return res.data;
    }, (err) => {
        console.log(err);
    });
}
export function getTrialEntries (){
    console.log("API call 2")
    return axios.get('https://api.publicapis.org/entries?title=science').then((res) => {
        return res.data;
    }, (err) => {
        console.log(err);
    });
}

export async function getCombineList(){
    let mylist = await axios.get('https://api.publicapis.org/entries?title=my');
    let sciencelist = await axios.get('https://api.publicapis.org/entries?title=science');
    return { mylist,sciencelist }

}

export function autoComplete(searchKeyword){
    return axios.get(`https://api.publicapis.org/entries?title=${searchKeyword}`);
}

export function listForAg(){
    return axios.get('https://www.ag-grid.com/example-assets/row-data.json');
}
