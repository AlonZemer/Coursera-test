import React from 'react';
import DishDetail from './DishDetailComponent';

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <DishDetail dish={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <DishDetail dish={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <DishDetail dish={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;