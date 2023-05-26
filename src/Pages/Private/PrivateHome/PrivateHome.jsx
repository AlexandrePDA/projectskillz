import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { db } from "../../../firebase-config";
import { getDocs, collection } from 'firebase/firestore';

const PrivateHome = () => {

  const [searchValue, setSearchValue] = useState("");

  const handleForm = () => {
    console.log(searchValue);
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  }

  // gere le get des cards présentes dans db
  const [cardList, setCardList] = useState([]);
  const [filter, setFilter] = useState("");
  const cardsCollectionRef = collection(db, "cards");

  useEffect(() => {
    const getCardList = async () => {
      // READ DATA FROM DB*
      try {
        const data = await getDocs(cardsCollectionRef);
          const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
          setCardList(filteredData);
        
      } catch (error) {
        console.error(error);
      }

    };

    getCardList();



  }, [])



  // try
  const handleFilterChange = async e => {
    const selectedOption = e.target.value;
    setFilter(selectedOption);
    console.log("Option choisis : ", selectedOption);
  }

  const options = ["Langue", "Programmation", "Art", "Rédaction"];


  return (

    <>
      <section className="bg-dark-purple w-screen h-screen mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-8 text-white text-2xl text-center px-8 lg:px-0">Partagez vos compétences en trouvant le bon profil 🚀</h1>
          <div className="flex flex-col md:flex-row items-center gap-2 max-w-screen-lg mt-8">
            <p className="text-white">Filtrez </p>
            <select onChange={handleFilterChange} className="mt-1 w-full text-gray-800 p-1 rounded-md  shadow-sm" required name="competences" id="competences">
              <option value="">Selectionnez </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

          </div>
          <div className="flex flex-col md:flex-row flex-wrap  mx-auto max-w-screen-xl">

            {cardList.map((value, index) => (
              <Cards key={index} value={value} />
            ))}
          </div>

        </div>
      </section>




    </>
  )
}

export default PrivateHome;