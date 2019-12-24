import React,{Component} from 'react';
import Navbar from './navbar'
import './animeApi'
import axios from 'axios'
import Carousel from '../../node_modules/react-bootstrap/Carousel'
import img1 from '../images/11.jpg'
import img2 from '../images/12.jpg'
import img3 from '../images/13.jpg'
import '../style.css'

class Anime extends Component
{

  componentDidMount()
  {
    
        var i;

        axios.get("https://api.jikan.moe/v3/top/anime/1").then(data => 
        {
            console.log(data);
            
        
            for(i=0;i<data.data.top.length;i++)
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

                var divv = document.createElement('div');
                divv.className="anim";
                var divvv = document.createElement('div');
                divvv.className="anim";
                
                var img = document.createElement('img');
                    img.className="imgdata"; 
                    img.src =  data.data.top[i].image_url;

                var divback = document.createElement('div');
                divback.className="flip-card-data";

                var btn = document.createElement('input');
                btn.type="button"
                btn.value="yess"
        
                var para = document.createElement('p'); 
                var node = document.createTextNode(data.data.top[i].title);
                para.appendChild(node);

               divback.appendChild(btn)
        
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

    render()
    {

        return (
        <React.Fragment>
            <Navbar type="Anime" auth={this.props.location.auth} data={this.props.location.data}/>
            <Carousel id="abc" className="slider">
              <Carousel.Item className="imgslide">
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className="imgslide">
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="imgslide">
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>  
            <h1 id="heading">Most Popular Animes : </h1>
            <div id="showData" className="caards">
            </div>
            
            
        </React.Fragment>
        )
    }
}

export default Anime;