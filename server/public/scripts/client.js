console.log('client.js is sourced!');

// this function will get the quotes from the server

function getCalculations(){
    //console.log('GET calculations test');

    // AXIOS GET 

    axios.get('/calculations').then(response => {
        //console.log(response);
        console.log('grabbing the data', response.data);

       console.log(renderHistory(response.data));

    }).catch(error => {
        console.log('Axios GET failed, unable to load calculations array', error);
    })

}

function renderHistory(calculations){
    let contentDiv = document.querySelector('#history');
  //  contentDiv.innerHTML = '';
 
  for( let items of calculations) {
    contentDiv.innerHTML += `<ul> <li>${items.numOne} ${items.operator} ${items.numTwo} = ${items.result} </li></ul> <br>`
  }

}
getCalculations();