import { Link } from "react-router-dom";

// TODO LIST OF products of the user
const emailList = [
  {
    id: "isn333115515616516",
    image: "https://picsum.photos/100/100",
    title: "Grains",
    description: "Natural grow grains from chiriqui",
    quantity: 25,
  },
  {
    id: "isn33311551561651645",
    image: "https://picsum.photos/100/100",
    title: "Grains",
    description: "Natural grow grains from chiriqui",
    quantity: 25,
  },
];

const ItemList = ({ id, image, quantity, title, description, category }) => (
  <li>
    <Link to={`/user/products/${id}`} className={"rounded-3 border-light"}>
      <div className="form-check mt-1">
        <input className="form-check-input" type="checkbox" id="blankCheckbox1" />
        <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox1"></label>
      </div>
      <div className="email-user">
        <span className="btn-round-xss ms-0 bg-success me-2"></span>
        <img src={image} alt={title} className="w35 me-2" />
        <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">{title}</h6>
      </div>
      <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
        <i className="feather-star font-xss text-warning me-2"></i>
        {category}
      </div>
      <div className="email-text text-grey-500 fw-600 font-xssss">{description}</div>

      <div className="email-time text-grey-500 fw-600">{quantity}</div>
    </Link>
  </li>
);

const UserProducts = () => {
  return (
    <div className="main-content right-chat-active">
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0" style={{ maxWidth: "100%" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                <ul className="email-message">
                  {emailList.map((value) => (
                    <ItemList {...value} key={value.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProducts;
