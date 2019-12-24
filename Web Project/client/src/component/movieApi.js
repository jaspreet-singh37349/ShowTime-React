import axios from 'axios'

var movieapi = ()=>
{

    document.getElementById("abc").style.display="none";

    var i;
        
    var txtSearch = document.getElementById("inputSearch").value;

    document.getElementById("showData").innerHTML="";
    var newHeading = "Results for : "+txtSearch;
    document.getElementById("heading").innerHTML="<h1>"+newHeading+"</h1>";

    axios.get("https://cors-anywhere.herokuapp.com/omdbapi.com/?s="+txtSearch+"&apikey=666248b2").then(data => {
            //console.log(data);


        console.log(data);
        

        for(i=0;i<data.data.Search.length;i++)
        {
            var divv = document.createElement('div');
            divv.className="movie";

            var divv1 = document.createElement('div');
            divv1.className="flip-card";
            var divv2 = document.createElement('div');
            divv2.className="flip-card-inner";
            var divv3 = document.createElement('div');
            divv3.className="flip-card-front";
            var divv4 = document.createElement('div');
            divv4.className="flip-card-back";

            var divvv = document.createElement('div');
            divvv.className="movie";

            var divback = document.createElement('div');
            divback.className="flip-card-data";

            var para = document.createElement('p'); 
            var node = document.createTextNode(data.data.Search[i].Title);
            para.appendChild(node);
            
            var img = document.createElement('img'); 
                img.src =  data.data.Search[i].Poster;
                img.className="imgdata"; 
            
    
            divv.appendChild(img);
            divv.appendChild(para);
            divvv.appendChild(divback);
            divv4.appendChild(divvv);
            divv3.appendChild(divv);
            divv2.appendChild(divv3);
            divv2.appendChild(divv4);
            divv1.appendChild(divv2);
            document.getElementById('showData').appendChild(divv1);
        }

    });

    document.getElementById("showData").style.display="flex";
}

export default movieapi;