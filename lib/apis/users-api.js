import axios from 'axios';

export async function get(page, perPage, limit){
  try {
      const response = await axios.get('https://randomuser.me/api/', {
        params: {
          seed: 'foobar',
          inc: 'login,name,email,gender,registered',
          results: limit,
          nat: 'gb',
          page: page,
          results: perPage
        },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
}


