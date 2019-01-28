import axios from 'axios';
import cookie from 'react-cookies';


export async function authenticate(username, password){
    var body={
        name: username,
        password: password,
    };
    var response = await axios.post("/api/authenticate", body);
    if (response.data.success){
        // Generamos la suscripcion del token en la sesion.
        cookie.save("token", response.data.token);
        cookie.save("user", response.data.user);
        return {
            validated: true
        };
    } else return {
        validated: false,
        message: response.data.message,
    }
}

