import axios from 'axios';

export default async function handler(req, res) {
  const { gender } = req.query;

  try {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        //seed: 'foobar',
        inc: 'login,name,email,gender,registered',
        results: 100,
        nat: 'gb',
        gender: `${gender}`,
      },
    });
    res.status(200).json(response.data.results);
  } catch (error) {
    res.status(400).json({});
  }
}
