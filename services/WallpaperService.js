import axios from "axios";

const baseUrl = "https://picsum.photos/";
const baseUrlWithPath = (path) => `${baseUrl}${path}`;

export default class WallpaperService {

    static async getWallpapers(searchParam) {
        const response = await axios.get(baseUrl + "/v2/list", {
            params: searchParam,
        });
        return response.data;
    }

    static async getWallpaper(id) {
        if (!id) {
            return Promise.reject("id is required");
          }
        const response = await axios.get(baseUrlWithPath(`id/${id}/info`));
        return response.data;
    }
}