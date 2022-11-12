import React,{Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



const TabOne = [
    {
        image: '01',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '02',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '03',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '04',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '05',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '06',
        bigImage: 'assets/images/hotel.png',
    },
]

class Profilephoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }

    render() {
        const { tab1, isOpen } = this.state;

        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-flex align-items-center  p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">Photos</h4>
                    <a href="/home" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                <div className="card-body d-block pt-0 pb-2">
                    <div className="row ps-3 pe-3">
                        {TabOne.map((value , index) => (
                            <div className="col-6 mb-1 p-1" key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabOne[tab1].bigImage}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % TabOne.length,
                                            })
                                        }
                                    />
                                )}
                                
                                <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                    <a href="#portfolio-details">
                                        <img src={`${value.bigImage}`} alt="Portfolio" className="img-fluid rounded-3 w-100"/>
                                    </a>
                        
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card-body d-block w-100 pt-0">
                    <a href="/home" className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="feather-external-link font-xss me-2"></i> More</a>
                </div>
            </div>
        );
    }
}

export default Profilephoto;