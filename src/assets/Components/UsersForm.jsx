import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import modeTheme from '../../custoomHooks/modeTheme';
import form from './styles/form.module.css'


const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const {isMode}=modeTheme();

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
    <form className={` ${form.form} ${isMode!=true && form.formDark}`} onSubmit={handleSubmit(getFormData)}>
      <div className={`${form.formDiv}`}>
        <label  className={`${form.formLabel}`} htmlFor="name-id">First Name</label>
        <input className={ `${errors.first_name ? form.formInputError :form.formInput }`}
          type="text"
          id="name-id"
          {...register('first_name', { required: true })}
          autoComplete="off"
        />
      </div>

      <div  className={`${form.formDiv}`}>
        <label className={`${form.formLabel}`} htmlFor="lastName-id">Last Name </label>
        <input  className={ `${errors.last_name ? form.formInputError :form.formInput }`}
          type="text"
          id="lastName-id"
          {...register('last_name', { required: true })}
          autoComplete="off"
        />
      </div>

      <div  className={`${form.formDiv}`}>
        <label className={`${form.formLabel}`} htmlFor="email-id">Email</label>
        <input  className={ `${errors.email ? form.formInputError :form.formInput }`}
          type="email"
          id="email-id"
          {...register('email', { required: true })}
          autoComplete="off"
        />
      
      </div>

      <div  className={`${form.formDiv}`}>
        <label className={`${form.formLabel}`} htmlFor="password-id">Password</label>
        <input className={ `${errors.password ? form.formInputError :form.formInput }`}
          type="password"
          id="password-id"
          {...register('password', { required: true })}
          autoComplete="off"
        />
       
      </div>

      <div  className={`${form.formDiv}`}>
        <label className={`${form.formLabel}`} htmlFor="birthday-id">Birthday</label>
        <input  className={ `${errors.birthday ? form.formInputError :form.formInput }`}
          type="date"
          id="birthday-id"
          {...register('birthday', { required: true })}
          autoComplete="off"
        />
     
      </div>
    
      <button className={`${form.button}`} type='submit'>{submitButton}</button>
    </form>

  );
};

export default ProductsForm;