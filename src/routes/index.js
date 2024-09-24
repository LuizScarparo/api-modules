import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parse_route_path.js";

export const routes = [...tickets].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}))