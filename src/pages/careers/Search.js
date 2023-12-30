import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/careers.css";
import Jobs from "../../context/job.json"

function Jobsearch() {
    // Set of the different department :
    const [departments, setDepartments] = useState([]);
    const [locations, setLocations] = useState([]);
    // Our filters :
    const [filtered, setFiltered] = useState([]);
    const [departmentFilter, setDepartmentFilter] = useState(null);
    const [locationFilter, setLocationFilter] = useState(null);

    useEffect(() => {
        // Filling our sets :
        const deptSet = new Set(Jobs.careers.map(job => job.department));
        const locaSet = new Set(Jobs.careers.map(job => job.location));
        setDepartments([...deptSet]);
        setLocations([...locaSet]);
        // Applying our filters :
        const filteredList = Jobs.careers.filter((job) => {
            const departmentMatch = departmentFilter ? job.department === departmentFilter : true;
            const locationMatch = locationFilter ? job.location === locationFilter : true;
            return departmentMatch && locationMatch;
        });

        setFiltered(filteredList)

    }, [departmentFilter, locationFilter]);


    return (

        <main>
            <h1 className='espace top very-very-large'>Careers at Arasaka</h1>
            <div className='flex row gap-1 espace top'>
                {/* For our select menu, we will map our sets  onChange={event => setDepartmentFilter(event.target.value)}*/}
                <select
                    className='pad-1 radius-8'
                    defaultValue={""}
                    onChange={event => setDepartmentFilter(event.target.value === "" ? null : event.target.value)}
                >
                    <option value={""}>All fields</option>
                    {departments.map((department, index) => {
                        return <option key={index} value={department} >{department}</option>
                    })}
                </select>
                <select
                    className='pad-1 radius-8'
                    defaultValue={""}
                    onChange={event => setLocationFilter(event.target.value === "" ? null : event.target.value)}
                >
                    <option value={""}>All locations</option>
                    {locations.map((location, index) => {
                        return <option key={index} value={location}>{location}</option>
                    })}
                </select>
                <p className='item centered end'><b>{filtered.length === Jobs.careers.length ? filtered.length + " careers" : `${filtered.length} result${filtered.length > 1 ? "s" : ""} out of ${Jobs.careers.length} careers`}</b></p>
            </div>
            <ul className='job-list espace top'>
                {
                    filtered.length === 0 ? <li>No careers match your search.<br /> Feel free to send your Resume to our AI, it will contact you when a position suitable for you open.</li> :
                        filtered.map((job, index) => {
                            return (
                                <li key={index} className='flex row'>
                                    <div className='flex split-2 col'>
                                        <h3>{job.title}</h3>
                                        <p>{job.location} — {job.department}</p>
                                    </div>
                                    <Link className='item end'>
                                        <p className='underline'>Apply now</p>
                                    </Link>
                                </li>
                            )
                        })

                }
            </ul>
        </main>
    );
}

export default Jobsearch;