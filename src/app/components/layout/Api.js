import axios from "axios"
const baseUrl = process.env.REACT_APP_BASEURL
const accessToken = process.env.REACT_APP_TOKEN
const sessionToken = process.env.REACT_APP_SESSIONTOKEN
// export const getLokasiSuggest = async() => {
//     const movie = await axios.get(`${process.env.REACT_APP_BASEURL}/suggest`)
//     return
// }

export const searchLokasi = async(q) => {
    const search = await axios.get(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${q}&session_token=0e8f9c41-12a9-4371-88ac-a5c4f2b08787&access_token=pk.eyJ1Ijoic2FobGFubmF1ZmFsIiwiYSI6ImNsbXI0YzQzZzAzOWYybHA5ZWozb3hhbGUifQ.c2yCD-whubLOVmyjz-WMaw`)
    return search.data.suggestions
}