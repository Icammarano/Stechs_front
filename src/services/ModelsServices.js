import instance from "../config/Axios";

export const addNewModel = (data) => {
    return instance.post("/modems", data);
};
