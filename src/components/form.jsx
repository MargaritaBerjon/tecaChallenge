import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./form.css";

function Form(props) {
    const { name, surname, email, phone, age, ...others } = props.elem;
    const [termsChecked, settermsChecked] = useState(false);
    const [formData, setformData] = useState(null);

    useEffect(() => {
        //Carga de datos de la api en objeto formData
        const formData = props.elem;
        delete formData.id;
        setformData(formData);
    }, [props.elem]);

    const onTermsChange = (areTermsAccepted) => {
        settermsChecked(areTermsAccepted);
    };

    const onSubmit = () => {
        console.log("ENVIAR");
    };

    const formChanges = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        const newFormValue = formData;
        newFormValue[field] = value;
        setformData(newFormValue);
        // console.log("Form changes:", newFormValue);
        // console.log(form);
    };

    const form = (
        <form className='user-form' onSubmit={onSubmit} onChange={(ev) => formChanges(ev)}>
            <label>Nombre</label>
            <input type='text' id='name' name='name' value={name} disabled />
            <label>Apellidos</label>
            <input type='text' id='surname' name='surname' value={surname} disabled />
            <label>Email</label>
            <input type='email' id='email' name='email' value={email} disabled />
            <label>Teléfono</label>
            <input type='tel' id='phone' name='phone' pattern='[0-9]{9}' required defaultValue={phone} />
            <label>Edad</label>
            <input type='number' id='age' name='age' required defaultValue={age}></input>
            <label>Importe Préstamo</label>
            <input type='number' id='loan_amount' name='loan_amount' pattern='[0-9]' min='11' max='1000' defaultValue={others?.loan_amount} required></input>
            <label>Tiempo a devoler </label>
            <input type='number' id='loan_weeks' name='loan_weeks' pattern='[0-9]' min='1' max='20' defaultValue={others?.loan_weeks} required></input>
            {/* <select id='loan_weeks' name='loan_weeks' defaultValue={others?.loan_weeks} required></select> */}
            <div className='form-terms'>
                <input id='check' type='checkbox' onClick={(ev) => onTermsChange(ev.target.checked)} />
                <a href='https://cloudframework.io/terminos-y-condiciones/' target='_blank' rel='noreferrer'>
                    Aceptar términos y condiciones
                </a>
            </div>
            <input type='submit' value='Submit' disabled={!termsChecked} />
        </form>
    );

    return form;
}

Form.prototypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    age: PropTypes.number,
};

export default Form;
