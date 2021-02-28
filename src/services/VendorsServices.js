import instance from "../config/Axios";

export const getVendorsUndefined = (vendor) => {
    return instance.get(`/modems/${vendor}`);
};

/*
export const getVendors() = () => {
    return instance.get("/modems");
}
*/
