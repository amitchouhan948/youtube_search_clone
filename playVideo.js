
let container=document.getElementById("videoPlayer")
let data=JSON.parse(localStorage.getItem("videoId"))

let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${data}`

container.append(iframe);

