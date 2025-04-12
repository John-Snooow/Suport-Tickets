export function extractQueryParams(query) {
    return query 
    .slice(1)
    .split('&')
    .reduce((params, param) => {
        const [key, value] = param.split('=')

        params[key] = value
        
        return params
    }, {})
}