import React,{Component} from 'react';
import Navbar from './navbar'
import './tvshowApi'
import axios from 'axios'
import Carousel from '../../node_modules/react-bootstrap/Carousel'
import img1 from '../images/tvimg1.jpg'
import img2 from '../images/tvimg2.jpg'
import img3 from '../images/tvimg3.jpg'
class TVshow extends Component
{

    componentDidMount()
    {

    var i;
        

    axios.get("https://cors-anywhere.herokuapp.com/api.tvmaze.com/shows").then(data => {
            //console.log(data);

        console.log(data);
        
    
        for(i=0;i<50;i++)
        {
            //arrData.push(data.results[i].title);
            var divv = document.createElement('div');
            divv.className="tv";

            var divv1 = document.createElement('div');
            divv1.className="flip-card";
            var divv2 = document.createElement('div');
            divv2.className="flip-card-inner";
            var divv3 = document.createElement('div');
            divv3.className="flip-card-front";
            var divv4 = document.createElement('div');
            divv4.className="flip-card-back";

            var divvv = document.createElement('div');
            divvv.className="tv";

            var divback = document.createElement('div');
            divback.className="flip-card-data";
            
            var img = document.createElement('img'); 
                img.src =  data.data[i].image.original;
                img.className="imgdata"; 
    
            var para = document.createElement('p');
            var node = document.createTextNode(data.data[i].name);
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
    });

    document.getElementById("showData").style.display="flex";
    }

    render()
    {

        return (
        <React.Fragment>
            <Navbar type="TV" auth="false"/>
            <Carousel id="abc" className="slider">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>  
            <h1 id="heading">Most Popular TV Shows : </h1>
            <div id="showData" className="caards">

            </div>          
        </React.Fragment>
        )
    }
}

export default TVshow;