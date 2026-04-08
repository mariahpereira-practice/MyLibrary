import { HOST } from "../services/api";

export function getImageUrlBook(url: string | undefined): string {
    if(!url) {
        return "https://www.shutterstock.com/image-vector/default-ui-image-placegolder-wireframes-600nw-1037719192.jpg";
    }
    return `${HOST}${url}`;
}