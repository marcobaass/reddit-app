import { baseUrl } from "../../shared/baseUrl";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};