import React, { useEffect, useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import profil from "../../../assets/photo-profil.jpg";


const Cards = (props) => {

    const { value } = props;

    const [showLinkedin, setShowLinkedin] = useState(false);
    const [showGithub, setShowGithub] = useState(false);
    const [showInstagram, setShowInstagram] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        // affiche seulement les réseaux qui ont été remplis
        if (Number(value.Linkedin.length) != 0) {
            setShowLinkedin(true)
        }
        if (Number(value.Github.length) != 0) {
            setShowGithub(true)
        }
        if (Number(value.Instagram.length) != 0) {
            setShowInstagram(true)
        }
    }, [value])



    return (
        <section className="p-4 mt-8  md:w-[25rem]  h-full ">





            <div className="flex flex-col  bg-white text-gray-800 items-center p-8 transition-colors duration-300 transform border rounded-xl  ">

                <div className="absolute right-3 top-3">
                    <div
                        className="inline-flex items-center overflow-hidden rounded-md border bg-white"
                    >

                        <button
                            onClick={() => setToggle(!toggle)}
                            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    {toggle && (
                        
                        <div
                        className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                        role="menu"
                    >
                        <div className="p-2">
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                            >
                                Modifier
                            </a>
                        </div>

                        <div className="p-2">
                            <form method="POST" action="#">
                                <button
                                    type="submit"
                                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                                    role="menuitem"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>

                                    Supprimer
                                </button>
                            </form>
                        </div>
                    </div>
                    )}
                </div>



                <img src={profil} alt="photo profil" className="rounded-full shadow-xl w-32 h-32 object-cover" />
                <h2 className="mt-4 text-2xl font-semibold  capitalize text-pink">{value.Prenom} {value.Nom}</h2>
                <div className="flex gap-2 text-4xl my-3 mx-2 text-gray-500">
                    {showLinkedin && (
                        <button>
                            <a href={value.Linkedin}>
                                <AiFillLinkedin />
                            </a>
                        </button>
                    )}

                    {showGithub && (
                        <button>
                            <a href={value.Github}>
                                <AiFillGithub />
                            </a>
                        </button>
                    )}

                    {showInstagram && (
                        <button>
                            <a href={value.Instagram}>
                                <AiFillInstagram />
                            </a>
                        </button>
                    )}

                    <button>
                        <a href={`mailto:${value.Email}`}>
                            <MdEmail />
                        </a>
                    </button>

                </div>
                <p className="mt-2 text-sm">" {value.Description} "</p>


                <h4 className="my-4 font-bold">Mes compétences 💪</h4>
                <div className="flex flex-wrap justify-center">
                    {(value.MyCompetences).map((item, index) => (
                        <p key={index} className="ml-2 mt-1 bg-pink text-white py-1 px-2 rounded-lg">{item}</p>
                    ))}
                </div>

                <h4 className="my-4 font-bold">Je cherche 🔍</h4>
                <div className="flex flex-wrap justify-center">
                    {(value.WantCompetence).map((item, index) => (
                        <p key={index} className="ml-2 mt-1 bg-grey text-white py-1 px-2 rounded-lg">{item}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards