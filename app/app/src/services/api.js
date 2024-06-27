class Servicios {
    fetchData(callback) {
        const apiurl = 'app/json/platos.json'; 
        
        fetch(apiurl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching filtered data:', error);
                callback(error, null);
            });
    }
}

export default Servicios;
