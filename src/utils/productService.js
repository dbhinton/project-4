import tokenService from "./tokenService";

const BASE_URL = "/api/proucts/";

export function create(product){
	return fetch(BASE_URL, {
		method: 'POST',
		body: product, // <- this has an image so its formData, no need to jsonify
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
        if (res.ok) return res.json();
        console.log(res)
		throw new Error(res.message);
	  })
}

export function getAll() {
	return fetch(BASE_URL, {
	  method: 'GET',
	  headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('bad Credentials');
	  })
  }