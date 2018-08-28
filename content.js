


//
// document.addEventListener("click", function (event) {
//     alert(event.target);
// });
//
//
//
// document.onclick = function(event) {
//   const data = event.target.href;
//   fetch('http://localhost:3000/', {
//         method: 'post',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           strData: data
//         })
//       }).then(response => console.log(response.json()))
// }

//var p = document.getElementByClassName("A");

// p.onclick = function(event) {
//   console.log(event.target.href)
// }


// chrome.storage.sync.clear()
// var urlArray;
// chrome.storage.sync.get('savedUrls',function(result){
//   console.log('onloadpage ', result.savedUrls)
//   if (result.savedUrls === undefined) {
//     urlArray = [];
//   } else {
//     urlArray = result.savedUrls;
//   }
// });

document.onkeyup = function(e){

  if(e.key == "Shift"){
    chrome.storage.sync.get('savedUrls',function(result){
      var array = result.savedUrls ? result.savedUrls : [];
      array.push(document.URL);
      var jsonObj = {};
      jsonObj['savedUrls'] = array;
      chrome.storage.sync.set(jsonObj, function() {
            console.log("Saved a new array item");
      });

    });

    // console.log("url ", document.URL)
    // urlArray.push(document.URL);
    // chrome.storage.sync.set({'savedUrls':urlArray})
    // chrome.storage.sync.get('savedUrls',function(result){
    //   console.log("result/UserInput ", result.savedUrls);
    //   console.log("url ", document.URL)
    // });

  // }
  }
  else if (e.key == "k"){
    let tempArr = [];
    chrome.storage.sync.get('savedUrls',function(result){
      console.log("result/UserInput ", result.savedUrls);
      tempArr = result.savedUrls;
    });
    chrome.storage.sync.get('Term',function(result){
      console.log("add to googleTerm ", result.Term)
      chrome.storage.sync.set({[result.Term]:tempArr})
    });

  }

  else if (e.key == "Backspace") {
    chrome.storage.sync.clear()
    // chrome.storage.sync.get('hi',function(result){
    //   console.log("google search term and data ", result);
    //   // console.log("url ", document.URL)
    // });
  }

  if (e.key == "Enter") {
    chrome.storage.sync.get('Term',function(result){
      chrome.storage.sync.get(`${result.Term}`,function(result){
        console.log("google search term and data ", result);
        //console.log("url ", document.URL)
      });
    });

  }
}
