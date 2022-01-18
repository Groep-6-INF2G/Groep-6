import axios from 'axios'

export default function logOut() {
    axios.get('api/logout')
    return window.location.pathname = '/';
}
