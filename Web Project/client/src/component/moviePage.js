import React,{Component} from 'react';
import Navbar from './navbar'
import './movieApi'
import axios from 'axios'
import Carousel from '../../node_modules/react-bootstrap/Carousel'
import img1 from '../images/img1.png'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
class Movie extends Component
{
    componentDidMount()
    {

    var i;

    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=016cae63617a263ec533dc3ef336f9c6").then(data => {
            
        console.log(data);
        

        for(i=0;i<data.data.results.length;i++)
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
            var node = document.createTextNode(data.data.results[i].title);
            para.appendChild(node);
            
            var img = document.createElement('img'); 
                img.src = "http://image.tmdb.org/t/p/w185"+ data.data.results[i].poster_path;
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

    render()
    {

        return (
        <React.Fragment>
            <Navbar type="Movie" auth="false" />
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
            <h1 id="heading">Most Popular Movies : </h1>
            <div id="showData" className="caards">

            </div>          
        </React.Fragment>
        )
    }
}

export default Movie;