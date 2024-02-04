import axios from "axios";

export const newTicket = async (optn) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    await axios.post(`/api/v1/ticket`, optn, config);
    alert("Registration successful");
    window.location.href = `/ticket/${optn.email}`;
  } catch (error) {
    alert(error.response.data.message);
    return false
  }
};

export const getTicket = async (id) => {
  try {
    const { data } = await axios.get(`/api/v1/ticket/${id}`);
    return data.ticket;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
