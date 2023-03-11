import React,{Component} from 'react';
import Slider from "react-slick";

const storyList = [
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'Aliqa Macale ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'Seary Victor ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'John Steere ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'Mohannad ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'Studio ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'Hendrix ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'story.png',
        imageUrl: 'user.png',
        name: 'Zitoun ',
        email: 'support@gmail.com',
    },
]

class Storyslider extends Component {
    render() {
        const storysettings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        };
        return (
            <Slider {...storysettings}>
                <div data-bs-toggle="modal" data-bs-target="#Modalstory" className="card w125 h200 d-block border-0 shadow-none rounded-xxxl bg-dark overflow-hidden mb-3 mt-0 me-3">
                    <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                        <span className="btn-round-lg bg-white"><i className="feather-plus font-lg"></i></span>
                        <div className="clearfix mt-1"></div>
                        <h4 className="fw-700 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Add Story </h4>                    
                    </div>
                </div>
                {storyList.map((value , index) => (
                <div key={index}>
                    <div className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-0 me-3" style={{backgroundImage: `url("assets/images/${value.bgUrl}")`}}>
                        <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center" >
                            <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w50 z-index-1"><img src={`assets/images/${value.imageUrl}`} alt="avater" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                            <div className="clearfix mt-1"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">{value.name} </h4>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        );
    }
}

export default Storyslider;