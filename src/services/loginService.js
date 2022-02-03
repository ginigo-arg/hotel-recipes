import axios from "axios";

export const postLogin = async ({ email, password }) => {
  const options = {
    url: `http://challenge-react.alkemy.org`,
    method: "POST",
    headers: { "content-type": "application/json" },
    data: { email, password },
  };

  try {
    console.log("options:", options);
    const resp = await axios(options);
    const { data } = resp;
    console.log("resp:", resp);
    return {
      data: data,
      loading: false,
    };
  } catch (error) {
    console.log("error catch: ", error);

    return {
      data: error.response.data,
      loading: false,
    };
  }
};
