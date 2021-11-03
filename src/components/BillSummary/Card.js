import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/styles';

const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    width: "220px",
    borderRadius: "18px",
    '& div': {
        margin: "10px"
    },
    '& .icon': {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: "15px"
    },

'@media (max-width:667px)':{
   '& .icon':{
color:"red"
   } 
}
})



function BillCard({ icon, heading, amount, bgColor }) {
    return (
        <>
            <CardBox style={{backgroundColor: bgColor}}>
                <div className="icon">{icon}</div>
                <div><p>{heading}<br />
                    <span style={{ color: '#28997f' }}>{amount}</span></p></div>
            </CardBox>
        </>
    );
}

export default BillCard;
