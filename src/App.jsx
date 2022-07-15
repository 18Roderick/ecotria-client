import { useEffect } from "react";

import { auth } from "./services";

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
