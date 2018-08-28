if (document.getElementById("lst-ib").value != null){
  const googleTerm = document.getElementById("lst-ib").value;
  chrome.storage.sync.set({'Term':googleTerm}, function(){
    console.log(googleTerm)
  });
}
