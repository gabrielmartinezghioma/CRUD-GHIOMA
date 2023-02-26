import React from 'react';
import users from './styles/list.module.css'


const UsersList = ({ dataForm, deleteButton, modifyButton, deleteObeject, modifyObject }) => {
  return (
    <ul className={users.ul}>
      {dataForm.map((obejectForm, index) => 
        <li className={users.ulLi}
          key={index}>
          <h2 className={users.liH2} ><span className={users.span}>First Name</span> <span className={users.h2Span}>{obejectForm.first_name[0].toUpperCase() + obejectForm.first_name.slice(1, obejectForm.first_name.length)}</span></h2>
          <h3 className={users.liH2} ><span className={users.span}>Last Name</span> <span className={users.h2Span}>{obejectForm.last_name[0].toUpperCase() + obejectForm.last_name.slice(1, obejectForm.last_name.length)}</span></h3>
          <h3 className={users.liH2} ><span className={users.span}>Email</span><span className={users.h2Span}>{obejectForm.email.length > 25 ? obejectForm.email.slice(0, 25) : obejectForm.email}</span></h3>
          <h3 className={users.liH2} ><span className={users.span}>Password</span><span className={users.h2Span}>{obejectForm.password.length < 15 ? 'x'.repeat(obejectForm.password.length) : 'xxxxxxxxxx'}</span></h3>
          <h3 className={users.liH2} ><span className={users.span}>Birthday</span><span className={users.h2Span}>{obejectForm.birthday}</span></h3>

          <div className={users.ulLiDiv}>
            <button className={users.divbutton} onClick={() => modifyObject(obejectForm)}>{<img className={users.divImg} src={`${modifyButton}`} alt="modify" />}</button>
            <button className={users.divbutton} onClick={() => deleteObeject(obejectForm)}>{<img className={users.divImg} src={`${deleteButton}`} alt="delete" />}</button>
          </div>
        </li>
      
      )}
    </ul>

  );
};

export default UsersList;


