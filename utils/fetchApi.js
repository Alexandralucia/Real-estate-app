import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'cb0c289c20msh285c52d0dd2ecd6p179e33jsn99e752aa3e97',
    },
  })

  return data
}
