function QLDetails() {
    this.arrDetails = []
    this.renderDetails = function(id) {
        var promise = axios({
            method : 'GET',
            url : `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        })
        promise.then((result) => {
            console.log(result);
            this.arrDetails = result.data;
            console.log(this.arrDetails)
        });
        promise.catch((error) =>{
            console.log(error)
        })
        
    }
}