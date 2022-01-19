export default function IsAuthenticated() {
    const response = fetch(
        "api/Authenticate"
    ).then((response) => response.status)
    return Promise.resolve(response)
}