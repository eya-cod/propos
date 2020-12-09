import React from 'react';
import PropTypes from 'prop-types';



function ProfilComponent(props){
    
    const {
        FullName,
        bio,
        profession,
        handlName,
        children,
        
        } = props;

    return(
    <div>
        <h2>{FullName}</h2>

        <div>
        <h4>Bio:</h4>
        <ul>
            {bio.map((el, i) => (
            <li key={i}>{el}</li>
            ))}
        </ul>
        </div>

        <h4>profession: {profession}</h4>

        <div>
        <button  style={{borderRadius:'12px',boxShadow:'0 5px 8px #000',backgroundColor:'white',border: '2px solid',padding:'14px 40px'}} onClick={() => handlName(FullName)}>Click Here</button>
        </div>
        <br/>
        <div >{children}</div>
    </div>
    
    )

}


// default Props
ProfilComponent.defaultProps = {
    FullName: "Eya Sahli"
    };


  // PropTypes

    ProfilComponent.propTypes = {

    FullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.arrayOf(PropTypes.string),
    handlName: PropTypes.func.isRequired,

    };


export default ProfilComponent;