import axios from 'axios';
import { useEffect, useState } from 'react';
import app from './App.module.css'
import Load from './assets/Components/Load';
import ProductsForm from './assets/Components/UsersForm';
import ProductsList from './assets/Components/UsersList';
import PopUp from './assets/Components/PopUp';
import Error from './assets/Components/Error';
import modeTheme from './custoomHooks/modeTheme';


function App() {
  //Hooks
  const [updateProducts, setUpdateProducts] = useState(null);
  const [data, useData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate,] = useState(false);
  const [isError, setIsError] = useState(false);

  const { isMode, buttonFunction } = modeTheme()

  //Function
  function timeInScreen(setHook) {
    setHook(true)
    setTimeout(() => {
      setHook(false)
    }, 3000)
  }

  //  GET request 
  const getData = async () => {
    setIsLoad(true)
    try {
      const reply = await axios.get('https://users-crud-2h1r.onrender.com/users')
      if (reply.status === 200) {
        useData(reply.data)
      }
    } catch (error) {
      timeInScreen(setIsError);

    } finally {
      setIsLoad(false)
    };
  }

  useEffect(() => {
    getData()
  }, []);

  //  POST request 
  const sendOfProducsForm = (body) => {

    const postData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.post('https://users-crud-2h1r.onrender.com/users', body);
        if (reply.status === 201) {
          getData();
          timeInScreen(setIsCreated);
        }
      } catch (error) {
        timeInScreen(setIsError);

      } finally {
        setIsLoad(false)
      };
    }
    postData();
  };

  //  DELETE request 
  const deleteObeject = (body) => {

    const deleteData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.delete(`https://users-crud-2h1r.onrender.com/users/${body.id}/`);
        if (reply.status === 204) {
          getData();
          timeInScreen(setIsDelete);
        }
      } catch (error) {
        timeInScreen(setIsError);

      } finally {
        setIsLoad(false)
      };
    };
    setUpdateProducts(null)
    deleteData();

  };

  // PUT request 
  const modifyObject = (body) => {
    setUpdateProducts(body);
    scrollTo(0, 0)
  }

  const sendFormToApp = (body) => {

    const putData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.put(`https://users-crud-2h1r.onrender.com/users/${body.id}/`, body);
        if (reply.status === 200) {
          getData();
          timeInScreen(setIsUpdate);
        }
      } catch (error) {
        timeInScreen(setIsError);

      } finally {
        setIsLoad(false)
      };
    }
    setUpdateProducts(null)
    putData();
  }

  // componentes
  const componentProductsForm =
    <ProductsForm
      submitButton={'Submit'}
      sendOfProducsForm={sendOfProducsForm}
      sendAppToForm={updateProducts}
      sendFormToApp={sendFormToApp}
    />;
  const componentProductsList =
    <ProductsList
      dataForm={data}
      deleteButton={'/delete.png'}
      modifyButton={'/edit.png'}
      deleteObeject={deleteObeject}
      modifyObject={modifyObject}
    />;


  const componentError = <Error />
  const componentLoad = <Load />
  const componentCreate = <PopUp
    text={'User created successfully!'}
    imagen={'cheque.png'}
  />
  const componentDelete = <PopUp
    text={'User deleted successfully!'}
    imagen={'delete.png'}
  />
  const componentEdit = <PopUp
    text={'User updated successfully!'}
    imagen={'edit.png'}
  />

  return (
    <div className={` ${app.App} ${isMode!=true && app.AppDark}`}>
      <button className={`${app.button} ${isMode!=true && app.buttonDark}`} onClick={() => buttonFunction()}>Change theme</button>
      {isError && componentError}
      {/* {isLoad==false && componentLoad} */}
      {/* {isCreated && componentCreate} */}
      {/* {isDelete && componentDelete} */}
      {/* {isUpdate && componentEdit} */}
      {componentProductsForm}
      <div className={`${data.length>0 ? `${app.div} ${isMode!=true && app.divDark}` :app.divTextNone}`}>
        <div className={`${data.length>0 ? app.divTetx : app.divTextNone}`}>
          <h2 className={app.divTetxH2}>First Name</h2>
          <h2 className={app.divTetxH2}>Last Name</h2>
          <h2 className={app.divTetxH2}>Email</h2>
          <h2 className={app.divTetxH2}>Password</h2>
          <h2 className={app.divTetxH2}>Birthdayd</h2>
        </div>
        {componentProductsList}
      </div>
    </div>
  )
}

export default App
