export function parseRoutePath(path) {
    const routeParametersRefex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRefex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

    return pathRegex
}