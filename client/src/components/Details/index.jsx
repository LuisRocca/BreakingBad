import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/index.jsx";
import "./detail.css"

function Details(props) {
    const [loading, setLoading] = useState(false)
    const details = useSelector(i => i.details);
    const dispatch = useDispatch();
    const {id} = props.match.params;
    const {history} = props

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        dispatch(getDetails(id))
            setLoading(true)
    }, [id, dispatch]);

    return (
        <div className="contenedor-detail">
        <div className="detail">
            <button onClick={goBack} className='goBack' ><i class="fas fa-backward"></i> Go Back</button>
            {loading? 
            <div >
            <h2 className="nameC">{details.name}</h2>
            <div className="allDetails">
                <img className="imgDetails" src={details.image} alt="Not found"></img>
                <h3 className="rpt" >Nick name</h3>
                <h4>{details.nickName}</h4>
                <h3 className="rpt" >Status</h3>
                <h4>{details.status}</h4>
                <h4>{details.points}</h4>
                <h4>{details.birtday}</h4>
                <h4 className="rpt" >Occupations</h4>
                {details.occupation?.map(i => (
                    <h5>{i}</h5>
                ))}
            </div>
        </div> : 
        <div>Loading</div>
        } 
        </div>
        </div>
    )
};

export default Details;