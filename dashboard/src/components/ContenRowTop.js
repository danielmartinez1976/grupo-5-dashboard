import React from "react";

import CategoriInDb from "./CategoriaInDb";
import LastProductInDb from "./LastProductInDb";
import LastUserInDb from "./LastUserInDb";
import ContentRow from "./ContentRow";


function ContenRowTop(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">



            <div class="container-fluid">
                <ContentRow />
                <div className="row">
                    <LastProductInDb />
                    <LastUserInDb />
                    <CategoriInDb />
                </div>
            </div>





        </div>





    );
}
export default ContenRowTop;