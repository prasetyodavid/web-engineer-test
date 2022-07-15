import axios from 'axios';

//Server Side API
export async function get(f) {
  try {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        seed: 'foobar',
        inc: 'login,name,email,gender,registered',
        results: f.limit,
        nat: 'gb',
        page: f.page,
        results: f.perPage,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getbygender(f) {
  try {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        //seed: 'foobar',
        inc: 'login,name,email,gender,registered',
        results: f.limit,
        nat: 'gb',
        page: f.page,
        results: f.perPage,
        gender: f.gender,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

//Client Side API
export async function getall(f) {
  try {
    const response = await axios.get('api/users', {
      params: {
        page: f.page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getallbygender(f) {
  try {
    const response = await axios.get('api/gender', {
      params: {
        page: f.page,
        gender: f.gender,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
