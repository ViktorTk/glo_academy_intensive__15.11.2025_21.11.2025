const getData = () => {
  return fetch(
    'https://dataset-ac473-default-rtdb.firebaseio.com/goods.json'
  ).then((response) => response.json())
}

export default getData
