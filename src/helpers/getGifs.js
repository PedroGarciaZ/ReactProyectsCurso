export const getGifs = async(category) =>{

    const api_key = 'ssEP7VrMHB856UxEnd5GS3IcmGIIxH5b';
    const LIMIT = '10';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${LIMIT}&`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
   //console.log(gifs);
    return gifs;
  }