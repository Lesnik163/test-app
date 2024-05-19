import axios, { AxiosError } from "axios";
import { Photos } from "../components/Pages/Photos_page";

export const getPhotos = async (): Promise<Photos[]> => {
  try {
    const response = await axios.get<Photos[]>("http://localhost:3001/photos", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    return data;
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Запрос был сделан и сервер ответил кодом не в диапазоне 2xx
        console.error(
          "Server responded with error:",
          axiosError.response.status
        );
      } else if (axiosError.request) {
        // Запрос был сделан, но сервер не ответил
        console.error("No response received from server:", axiosError.request);
      }
    } else {
      // Если это не ошибка Axios
      console.error("An error occurred:", error);
    }
    // Возвращаем пустой массив в случае ошибки
    return [];
  }
};
