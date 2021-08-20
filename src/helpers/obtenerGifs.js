export const obtenerGifs = async (item) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rHDE9Rl3u1TG1UTOsLt2AnS8AB4hu97o&q=${encodeURI(item)}&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map( (gif) => {
        return {
            titulo: gif.title,
            imagen: gif.images.downsized_medium.url
        }
    })
    return gifs;
}