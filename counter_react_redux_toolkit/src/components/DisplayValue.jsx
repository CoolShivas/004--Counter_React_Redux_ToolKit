import { useSelector } from "react-redux";

const DisplayValue = () => {

    // const counter = useSelector((store) => store.counter);
    // With the help of useSelector we are now able to access the store folder's INITIAL_VALUE i.e, 5 ;

    // Now, using reduxToolKit :-

    // const counterObj = useSelector((store) => store.counter);
    // const counter = counterObj.counterValue;

    // Or we can destructure the above counterValue directly :-

    const { counterValue } = useSelector((store) => store.counter)

    return (
        // <p className="lead mb-4"> Counter Value is = 0 .</p>
        // <p className="lead mb-4"> Counter Value is =  {counter} .</p>
        // Here, we will get the Counter Value is = 5 ;
        <p className="lead mb-4"> Counter Value is =  {counterValue} .</p>
    )
}

export default DisplayValue;