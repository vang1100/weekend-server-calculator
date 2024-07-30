console.log('client.js is sourced!');

// this function will get the quotes from the server

function getCalculations(){
    //console.log('GET calculations test');

    // AXIOS GET 

    axios.get('/calculations').then(response => {
        //console.log(response);
        console.log('grabbing the data', response.data);

        renderHistory(response.data);

    }).catch(error => {
        console.log('Axios GET failed, unable to load calculations array', error);
    })

}

//function to render history of calculations

// function for buttons

function submitCalculations(event){
    event.preventDefault();
    console.log('test');

//     let numOne = document.querySelector('#numOne').value;
//     let numTwo = document.querySelector('#numTwo').value;
//     console.log('inputs', numOne, numTwo);

// //     let operator = '';
// //     let result = 0;

//     let calcToAdd = {
//     numOne: numOne,
//     numTwo: numTwo,
//     operator: operator,
  
//    }


// axios.post('/calculations', calcToAdd).then(response =>{
//     console.log('Did POST work?', response);

//    console.log(math('math data', response.data));
//    document.querySelector('#numOne').value = '';
//     document.querySelector('#numTwo').value = '';
// }).catch(error => {
//     console.log('error in post /calculations', error);
//     alert('something went wrong in POST');
// })
// }
}




function renderHistory(calculations){
    let contentDiv = document.querySelector('#history');
  //  contentDiv.innerHTML = '';
 
  for( let items of calculations) {
    contentDiv.innerHTML += `<ul> <li>${items.numOne} ${items.operator} ${items.numTwo} = ${items.result} </li></ul> <br>`
  }

}
getCalculations();