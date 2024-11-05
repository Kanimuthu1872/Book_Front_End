import React from "react";

function PersonProps(props) {
    return (
        <tr>
            <td>{props.data.Id}</td>
            <td>{props.data.Name}</td>
        </tr>
    );
}

export default PersonProps;
