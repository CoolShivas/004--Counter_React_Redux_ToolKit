import { useSelector } from "react-redux";

const DisplayValue = () => {

    const counter = useSelector((store) => store.counter);
    // With the help of useSelector we are now able to access the store folder's INITIAL_VALUE i.e, 5 ;

    return (
        // <p className="lead mb-4"> Counter Value is = 0 .</p>
        <p className="lead mb-4"> Counter Value is =  {counter} .</p>
        // Here, we will get the Counter Value is = 5 ;
    )
}

export default DisplayValue;