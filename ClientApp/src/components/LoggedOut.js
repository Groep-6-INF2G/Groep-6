import React from "react";
import axios from 'axios'
import {Redirect} from 'react-router'

export default function LoggedOut() {
    axios.get('api/logout')
    return window.location.pathname = '/';
}


