import React, { useState } from 'react';
import '../Events/styles.css';
import Logo from '../../assets/LOGO DNA-01.png';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Event() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState([]);
    const [neighborhood, setNeighborhood] = useState('');
    const [date, setDate] = useState([]);
    const [schedule, setSchedule] = useState('');

    const history = useHistory();
    const ministry_id = localStorage.getItem('id');

    async function handleEvent(e) {
        e.preventDefault();

        const data = {
            name,
            description,
            zipcode,
            street,
            number,
            neighborhood,
            date,
            schedule,
            ministry_id
        };

        try {
            await api.post(`/ministries/${ministry_id}/events`, data);
            alert('Evento Agendado!');
            history.push('/home');
        } catch (err) {
            alert('Não foi possível criar Evento, Tente Novamente!');
        }
    }

    return (
        <div className="event-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="DNA LOGO"></img>
                </section>
                <form onSubmit={handleEvent}>
                    <h1>Cadastrar Novo Evento</h1>
                    <input className="form-input" placeholder="Nome do Evento" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                    <input className="form-input" placeholder="Descrição do Evento" type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
                    <input className="form-input" placeholder="CEP " type="text" value={zipcode} onChange={e => setZipcode(e.target.value)}></input>
                    <input className="form-input" placeholder="Rua" type="text" value={street} onChange={e => setStreet(e.target.value)}></input>
                    <input className="form-input" placeholder="Número" type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
                    <input className="form-input" placeholder="Bairro" type="text" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}></input>
                    <input className="form-input" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
                    <input className="form-input" placeholder="Horário" type="text" value={schedule} onChange={e => setSchedule(e.target.value)}></input>
                    <button className="btn btn-danger" type="submit">Cadastrar</button>
                    <Link className="link" to="/home">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );


}