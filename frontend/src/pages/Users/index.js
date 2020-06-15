import React, { useState } from 'react';
import logo from '../../assets/LOGO DNA-01.png';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../Users/styles.css';
import api from '../../services/api';

export default function Home() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('')
    const [whatsapp, setWhatsapp] = useState('');

    const ministry_id = localStorage.getItem('id');


    async function handleNewMember(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            age,
            whatsapp
        };

        try {
            await api.post(`/ministries/${ministry_id}/users`, data);
            alert('Membro Cadastrado com Sucesso');
            history.push('/home');
        } catch (err) {
            alert('Cadastro não realizado, Tente Novamente!');
        }
    }

    return (
        <div className="home-container">
            <div className="content">
                <section>
                    <img src={logo} alt="DNA Logo"></img>
                </section>
                <form onSubmit={handleNewMember}>
                    <h1>Cadastrar Membro</h1>
                    <input className="form-input" placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                    <input className="form-input" placeholder="Idade" type="number" value={age} onChange={e => setAge(e.target.value)}></input>
                    <input className="form-input" placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input className="form-input" placeholder="WhatsApp" type="number" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}></input>
                    <button className="btn btn-danger" type="submit">Cadastrar</button>
                    <Link className="link" to="/home">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    )
}
