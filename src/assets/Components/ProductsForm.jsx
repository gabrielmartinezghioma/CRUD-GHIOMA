import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const getFormData = (data) => {
    if (sendAppToForm === null) {
      sendOfProducsForm(data);
      reset(
        {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          birthday:''
        }
      )
    } else {
      sendFormToApp(data);
    }
  }

  useEffect(() => {
    if (sendAppToForm === null) {
      reset(
        {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          birthday:''
        }
      )

    } else {
      reset(sendAppToForm);
    }
  }, [sendAppToForm])

  return (
    <form className="form" onSubmit={handleSubmit(getFormData)}>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="name-id">First Name</label>
        <input className={`${ errors.first_name ? 'label__div--inputError' : 'label__div--input'} `}
          type="text"
          id="name-id"
          {...register('first_name', { required: true })}
        />
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="lastName-id">Last Name </label>
        <input className={`${ errors.last_name ? 'label__div--inputError' : 'label__div--input'} `}
          type="text"
          id="lastName-id"
          {...register('last_name', { required: true })}
        />
     
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="email-id">Email</label>
        <input className={`${ errors.email ? 'label__div--inputError' : 'label__div--input'} `}
          type="email"
          id="email-id"
          {...register('email', { required: true })}
        />
      
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="password-id">Password</label>
        <input className={`${ errors.password ? 'label__div--inputError' : 'label__div--input'} `}
          type="password"
          id="password-id"
          {...register('password', { required: true })}
        />
       
      </div>

      <div className='form__div'>
        <label className="form__div--label " htmlFor="birthday-id">Birthday</label>
        <input className={`${ errors.birthday ? 'label__div--inputError' : 'label__div--input'} `}
          type="date"
          id="birthday-id"
          {...register('birthday', { required: true })}
        />
     
      </div>
    
      <button className="form-button" type='submit'>{submitButton}</button>
    </form>

  );
};

export default ProductsForm;