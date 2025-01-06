export const fetchData = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`
    );
    const data = await response.json();
    // console.log(data)
    return{
        data,
        isLoading:false
    }
  } catch (error) {
    console.error(error);
  }
};
