import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
 import './AddTeamMember.css';

//add member and total expense component

const AddTeamMember = (props) => {
    const { addMember } = props;
    const totalExpense = addMember.reduce((previous, current) => previous + current.salary, 0)
    return (
        <div className="add-team-member">
            <h2>  Total Members: {addMember.length}</h2>
            <h3>Total Expense: ${totalExpense}</h3>
            <hr />
            <h2> <small>  Selected Developers</small> </h2>
            {/* member name show part here  */}
            <div className="list-container">
                {
                    addMember.map(singleMember => <p key={singleMember.id}>{singleMember.name}</p>)
                }
            </div>
        </div>
    );
};

export default AddTeamMember;