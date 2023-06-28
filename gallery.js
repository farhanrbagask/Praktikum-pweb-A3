console.log('gallery.js')

const getGallery = async () => {
    console.log('Start')
    const data = await fetch('https://jsonplaceholder.typicode.com/photos')
    //.then( async (Response) => {
    //    console.log('Mulai')
    //    const data = await Response.json()
    //    console.log(data)
    //    console.log("selesai")
    //    return data
    //})
    .then(Response => Response.json())
    console.log(data)
    console.log('Finish')

    const container = document.querySelector('#gallery > #data')

    container.innerHTML = data.map(item =>{
        return `
        <div style=background-color#ff660; width:400px; display:flex;">
        <img src = "${item.url}" style="height:200px; width:200px; object-fit:contain;">
        <span style = "align-self: center; padding: 8px;">${item.tittle}</span>
        </div>`
    })
}

getGallery()