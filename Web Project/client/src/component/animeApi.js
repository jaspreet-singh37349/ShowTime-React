import axios from "axios";

var animapi = () =>
    {

        document.getElementById("abc").style.display="none";

        var i;
        //var arrData=[];
        var txtSearch = document.getElementById("inputSearch").value;

        document.getElementById("showData").innerHTML="";
        var newHeading = "Results for : "+txtSearch;
        document.getElementById("heading").innerHTML="<h1>"+newHeading+"</h1>";

        axios.get("https://cors-anywhere.herokuapp.com/api.jikan.moe/v3/search/anime?q="+txtSearch+"&limit=20").then(data => 
        {
            console.log(data);
            
        
            for(i=0;i<data.data.results.length;i++)
            {
                //arrData.push(data.results[i].title);
                var divv1 = document.createElement('div');
                divv1.className="flip-card";
                var divv2 = document.createElement('div');
                divv2.className="flip-card-inner";
                var divv3 = document.createElement('div');
                divv3.className="flip-card-front";
                var divv4 = document.createElement('div');
                divv4.className="flip-card-back";

                var divvv = document.createElement('div');
                divvv.className="anim";

                var divback = document.createElement('div');
                divback.className="flip-card-data";

                var divv = document.createElement('div');
                divv.className="anim";
                
                var img = document.createElement('img');
                    img.className="imgdata"; 
                    img.src =  data.data.results[i].image_url;
        
                var para = document.createElement('p'); 
                var node = document.createTextNode(data.data.results[i].title);
                para.appendChild(node);
        
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
        
                
        
            //console.log(arrData);
        
        });
        
        document.getElementById("showData").style.display="flex";
        
    }

    export default animapi;