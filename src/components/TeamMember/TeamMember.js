import React from 'react';


import './TeamMember.css';

//single member component

const TeamMember = (props) => {
    const { image, name, Country, salary, designation, institute } = props.teamMember;
    return (
        <div className="teamMember">
            <img src={image} alt="" />
            <div className="teamMemberDetails">
                <h2 className="memberName"> <small>{name}</small> </h2>
                <p> <small>Role: {designation}</small></p>
                <p><small> Institute: {institute}</small></p>
                <p> <small> Country: {Country}</small></p>
                <h4 className="salary"> Salary: ${salary}</h4>
              
                <button className="hireMeBtn btn" onClick={() => props.handleHireMe(props.teamMember)}><i class="fas fa-hand-point-right"></i> Hire Me</button>
                <button className="skillsBtn btn"> Skills</button>
            </div>
        </div>
    );
};

export default TeamMember;