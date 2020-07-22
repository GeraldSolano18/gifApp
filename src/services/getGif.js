export default async function getGif({ keyword = "morty" } = {}) {
  const API = `https://api.giphy.com/v1/gifs/search?api_key=MX9nJ74wU86uiJRPDx3C7Eid9iaEFyAF&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  const respuesta = await fetch(API);
  const datax = await respuesta.json();
  const { data } = datax;
  const gifs = data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });
  return gifs;
}
