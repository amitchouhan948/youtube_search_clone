 

 async function append(){
 try{
    let query=document.getElementById("query").value
    console.log(query)
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyATuAp12OKKitZsSGxEy0OqZnO-EGd1b_k`
   
    let res=await fetch(url)

    let data=await res.json()

    console.log(data.items)

    menu(data.items)
 } catch (err){
 console.log(err)

 }


}

function menu(data){
    let container=document.getElementById("container")

    data.forEach(({id:{videoId},snippet:{title, thumbnails :{medium :{url}}}}) => {
        let div=document.createElement("div");

        let thumbnail=document.createElement("img")
        thumbnail.src=url;
        
        let h3=document.createElement("h3")
        h3.innerText=title;

        div.addEventListener("click", () => {
            newpage(videoId)
        })

            div.append(thumbnail,h3)
            container.append(div)
    })
    


}


function newpage(data){

    let id=data;
    localStorage.setItem("videoId",JSON.stringify(id));
    window.location.href="playVideo.html";
}


/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ae54Lsz5_9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */