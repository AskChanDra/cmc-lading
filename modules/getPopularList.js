// Get the DOM
const popularList = document.querySelector( '.popular-list');


function createPopularList( popularObjectList ) {

  Object.keys(popularObjectList).map(k => {
    console.log(popularObjectList[k])
    let trListItem = document.createElement( 'tr');
    trListItem.className = 'bg-lightGray bg-opacity-75 border-b-2 border-gray-600';
    let dayValue = popularObjectList[k]['1day'].movement;
    let dayClass = '';
    if(dayValue < 0 ){
      dayClass = 'text-darkRed';
    } else {
      dayClass = 'text-darkGreen';
    }
    trListItem.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white text-left">
    ${popularObjectList[k].name}
  </td>
  <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
    ${popularObjectList[k].spread}
  </td>
  <td class="text-sm ${dayClass} font-light px-6 py-4 whitespace-nowrap">
    ${Math.abs(dayValue)}%
  </td>
  <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
    <a
    href="#"
    class=" mr-4 p-1.5 px-6  w-20 text-center border border-darkGray text-darkGray bg-transparent  rounded-lg baseline hover:bg-lightGray hover:text-white "
    >Trade</a>
  </td>
    `;
    popularList.append(trListItem);
  })

}

/**
 * Fetch Popular List
 * 
 */
const getPopularList = ( popularRoute ) => {
  // get the JSON Data 
  fetch( popularRoute, {
      method: 'GET'
  })
  .then( response => response.json() )
  .then( popularObjectList => createPopularList( popularObjectList ) )
  .catch( (error) => {
      console.error( 'Fetch error: ', error )
      loader.style.display = 'none'
  })
}

export default getPopularList;