
import Breadcrumb from "./Breadcrumb";
import ProductMainSec1 from "./ProductMainSec1";
import ProductMainSec2 from "./ProductMainSec2";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import "../../styles/index.css"
import SingUp from "../../components/_SingUp/SingUp";


const Product = () => {
    return (
        <div>
            {/*BREADCRUMB*/}
            <Breadcrumb/>
            {/* /BREADCRUMB */}

            {/* SECTION */}
            <ProductMainSec1/>
            {/* /SECTION */}

            {/* Section */}
            <ProductMainSec2/>
            {/* /Section */}

            <SingUp/>
        </div>
    );
};

export default Product;