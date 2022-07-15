import { useEffect } from "react";

import { auth } from "./services";
console.log(import.meta.env);

export default function App() {
	useEffect(() => {
		auth
			.signIn({})
			.then((data) => {
				console.log(data);
			})
			.catch(console.info);
	}, []);
	return <div>App</div>;
}
