import * as JWT from "jsonwebtoken";
import * as LoginService from "../services/login";
import * as AuxObj from "../auxiliars/objectAux";

var superSecret = "TodoApp";


export async function authenticate(req, res){
    var username = req.body.name;
    var password = req.body.password;
    var result = await LoginService.authenticate(username, password);
    if (!result.validated){
        console.log("Ingreso impedido!");
        res.json({
            success: false,
            message: "Fallo de autenticacion, usuario o clave incorrectos."
        });
    } else {
        var user = AuxObj.clone(result.user); // Necesario, el objeto como viene es read-only.
        var role = AuxObj.clone(result.role);
        user.role = role;
        console.log("Ingreso concedido!");
        var token = JWT.sign({
            name: user.name
        }, superSecret, {
            expiresIn: 60*60*24, // expira en un dia (24 horas)
        });
        res.json({
            success: true,
            message: "Ingreso concedido",
            token: token,
            user: user,
        });
    }
}


export async function validateToken(req, res, next){
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];
    if (!token){
        console.log("No se proveyo Token");
        return res.status(403).send({
            success: false,
            message: "No token provided."
        });
    } else {
        try {
            var decoded = await JWT.verify(token, superSecret);
            req.decoded = decoded;
            console.log("token aceptado");
            next();
        } catch(e){
            console.log("Token rechazado");
            return res.status(403).send({
                success: false,
                message: 'Failed to authenticate token.'
            });
        }
        
    }
}


