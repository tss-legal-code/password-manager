import Header from './components/Header'
import Table from './components/Table';
function App() {

  // const tempDB = {
  //   "users": [
  //     {
  //       "id": 0,
  //       "login": "Lorem",
  //       "loginPassword": "nihil",
  //       "fullName": "Lorem Ipsum",
  //       "eMail": "lorem.ipsum@gmail.com",
  //       "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       "storedPasswords": [
  //         {
  //           "id": 1,
  //           "appointment": "lorem.1.ipsum@gmail.com",
  //           "password": "dol#r-$it-@met"
  //         },
  //         {
  //           "id": 2,
  //           "appointment": "lorem.2.ipsum@gmail.com",
  //           "password": "dol#r-$it-@met"
  //         },
  //         {
  //           "id": 3,
  //           "appointment": "lorem.3.ipsum@gmail.com",
  //           "password": "dol#r-$it-@met"
  //         },
  //         {
  //           "id": 4,
  //           "appointment": "lorem.4.ipsum@gmail.com",
  //           "password": "dol#r-$it-@met"
  //         }
  //       ]
  //     }
  //   ]
  // }


  return (
    <div className="container-md mt-5 pt-5 pb-5 border border-primary rounded px-lg-5 ">
      <Header />
      <Table />
    </div>
  );
}

export default App;
