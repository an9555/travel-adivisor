import axios from "axios";

const url ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "aee3eae3eemsh088ef7eec58696ap10b202jsne6a3e8902193",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};