import React,{Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Mainslide extends Component{
    render(){
        return(
            <div className="">
                <OwlCarousel className='owl-theme' loop autoplay margin={0}  items={1}>
                    <div className='item'>
                        <img src="images/banner1.jpg" />
                    </div>
                    <div className='item'>
                    <img src="images/banner2.jpg" />
                    </div>
                    <div className='item'>
                    <img src="images/banner3.jpg" />
                    </div>
                    
                </OwlCarousel>
            </div>
        )
    }
}