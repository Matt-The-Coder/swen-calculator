import React, { useEffect, useRef, useState } from "react";
import { isAuth } from "../components/auth/isAuth";
import Content from "../components/homepage/Content.jsx";
import Modal from "../components/homepage/Modal";
import { getCarInfo } from "../components/fetcher/fetch";
import { Link, useParams, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate()
    const { searchParams } = useParams();
    const [isSearched, setIsSearched] = useState('')
    const searchBar = useRef(null);
    const [car, setCar] = useState([]);
    const [modalStates, setModalStates] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        const keysearch = searchBar.current.value;
        setIsSearched(keysearch)
        keysearch !== '' ? navigate(`/search/${keysearch}`) :
            navigate(`/`);
    };

    const openModal = (index) => {
        setModalStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = true;
            return newStates;
        });
    };

    const closeModal = (index) => {
        setModalStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };

    const renderTd = () => {
        return car?.map((c, i) => {
            return (
                <tr key={i}>
                    <td>{c.id}</td>
                    <td id="boldData">{c.brand}</td>
                    <td>{c.model}</td>
                    <td id="boldData">{c.year}</td>
                    <td id="variantData">{c.variant}</td>
                    <td id="boldData">{c.marketvalue}K</td>
                    <td>
                        <a onClick={() => openModal(i)}>Quote</a>
                        <Modal isOpen={modalStates[i]} onClose={() => closeModal(i)}>
                            <Link to={`/quote/pv`} target="_blank">Personal Vehicle (5-Seater SEDAN)</Link>
                            <Link to={`/quote/cvsuv`} target="_blank">Commercial Vehicle (7-Seater SUV)</Link>
                            <Link to={`/quote/cvlt`} target="_blank">Commercial Vehicle (Light Truck)</Link>
                            <Link to={`/quote/cvht`} target="_blank">Commercial Vehicle (Heavy Truck)</Link>
                            <Link to={`/quote/cvhts`} target="_blank">Commercial Vehicle (Heavy Truck +Surcharge)</Link>
                        </Modal>
                    </td>
                </tr>
            );
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCarInfo(`/vehicles?q=${searchParams ? searchParams : ''}`);
            setCar(data.data);
            setModalStates(Array(data.data.length).fill(false));
        };
        fetchData();
    }, [isSearched]);

    return (
        <div className="Homepage" >
            <h2>SWEN Insurance Caloocan Estimated Market Value of Vehicles</h2>
            <div className="search">
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <input type="text" placeholder="Search Vehicle Brand, Model, Year or Model & Year" ref={searchBar} />
                    <button type="submit">
                        <img src="https://www.transparentpng.com/thumb/search-button/fcwrRn-circle-search-button-ball-blue-png.png" alt="" />
                    </button>
                </form>
            </div>
            <Content renderTableData={renderTd} />
        </div>
    );
};

export default Homepage;
