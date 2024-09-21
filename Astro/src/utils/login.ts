import jwt from "jsonwebtoken";
import { dbLogin } from "./routes";

export default async function login({
	identifier,
	password,
	id,
	maxAge,
	secret,
}: {
	identifier: string;
	password: string;
	maxAge: number;
	id:number;
	secret: string;
}) {
	const getLoginData = await dbLogin(identifier, password,id).then((data) => {
		return data;
	});
	if (getLoginData.success === false) {
		return { success: false, token: null, max: null };
	}
	const expire = Math.floor(Date.now() / 1000) + maxAge;
	const token = jwt.sign(
		{
			exp: expire,
			identifier: identifier,
			username: getLoginData.username,
			id: getLoginData.id,
		},
		secret,
	);
	console.log("---------************-------------")
	console.log(token)
//const token ="312efa5ef2a544dd6a1ae542d0531c5cc6c51d7e5ac8b288c837f9e6ed08784e7624fb6290a1acda8c59de11716e92bde7faddc5e135c4f519e95444fb23791fe5d6389a7100447baa75b576902f634c40b4ae2a38a16a21f950584f436ceb2a0ac3509e6d8adbc2ef072b79efc9ccf47997d35c85d533f4febaeb095eae9fb6"
	return { success: true, token: `${token}`, max: maxAge };
}
