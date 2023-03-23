import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useFormik } from "formik";
//import redux needed
import { useDispatch, useSelector } from "react-redux";
import {
  doGetBootcampRequest,
  doGetCriteTableRequest,
  doGetPetRequest,
} from "../../redux-saga/actions/CampDetailAction";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import CreateSuccess from "./CreateSuccess";

export default function DetailPage() {
  const [totalTalent, setTotalTalent] = useState(0);
  const [habitatCheck, setHabitatCheck] = useState([]);
  const [criteriaCheck, setCriteriaCheck] = useState([]);
  const [petRecommendationData, setPetRecommendationData] = useState([]);
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { bootcamps } = useSelector((state) => state.bootcampState);
  const { critetable } = useSelector((state) => state.critetableState);
  const { allpet } = useSelector((state) => state.petState);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(doGetBootcampRequest(id));
  }, [id]);

  useEffect(() => {
    dispatch(doGetCriteTableRequest(id));
  }, [id]);

  useEffect(() => {
    dispatch(doGetPetRequest(id));
  }, [id]);

  const onCheckHabitat = (item) => (event) => {
    let status = event.target.checked;
    let tampung = [status, item];

    if (tampung[0] === true) {
      setHabitatCheck([...habitatCheck, item]);
    } else {
      const filterdTalent = habitatCheck.filter((hab) => hab !== item);
      setHabitatCheck([...filterdTalent]);
    }
  };

  const onCheckCriteria = (item) => (event) => {
    let status = event.target.checked;
    let tampung = [status, item];

    if (tampung[0] === true) {
      setCriteriaCheck([...criteriaCheck, item]);
    } else {
      const filterdTalent = criteriaCheck.filter((crite) => crite !== item);
      setCriteriaCheck([...filterdTalent]);
    }
  };

  const validationSchema = Yup.object().shape({
    user_name: Yup.string("Please Enter Your Name").required(
      "Please Enter Your Name"
    ),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      crite_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (habitatCheck.length === 0) {
        console.log("habitat kosong");
      } else {
        // const animalsList = [];
        // const critetableList = [...critetable[0]];
        // const petList = [];

        // for (let i = 0; i < habitatCheck.length; i++) {
        //   for (let j = 0; j < critetableList.length; j++) {
        //     if (talentCheck[i] === critetableList[j].crite_name) {
        //       const animalsData = [];
        //       animalsData.push(critetableList[j].crite_pet_id, talentCheck[i]);
        //       animalsList.push(animalsData);
        //       petList.push(critetableList[j].crite_pet_id);
        //     }
        //   }
        // }

        // let pet_candidat = [...new Set(petList)];
        // let pet_recom_count = [];

        // for (let k = 0; k < pet_candidat.length; k++) {
        //   let animalCount = 0;
        //   let pet = {};
        //   for (let j = 0; j < petList.length; j++) {
        //     if (pet_candidat[k] === petList[j]) {
        //       animalCount = animalCount + 1;
        //     }
        //   }
        //   pet = { pet_id: pet_candidat[k], pet_score: animalCount };
        //   pet_recom_count.push(pet);
        // }

        // const pet_sort = pet_recom_count.sort(
        //   (a, b) => parseFloat(a.pet_score) + parseFloat(b.pet_score)
        // );

        // if (pet_sort[0].pet_score);
        // let pet_result = pet_sort[0];
        // const pet_recommendation = allpet[0].filter(
        //   (values) => values.pet_id === pet_result.pet_id
        // );
        // console.log(pet_sort);
        //setPetRecommendationData(pet_recommendation);
        setUserName(values.user_name);
        setIsOpen(true);
      }
    },
  });

  return (
    <>
      <div className="relative pt-24">
        {/* navbar */}
        <div className="fixed top-0 bg-amber-100 w-full h-16">
          <div className="px-5 py-3 flex items-center justify-between">
            {/* kiri */}
            <div class="flex-1 flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <div class="ml-5 flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <h1 className=" font-bold text-xl">_DUNNO</h1>
              </div>
            </div>

            {/* tengah */}
            <div className="flex-1 flex items-center m-auto">
              <div className="relative w-full flex items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-4 absolute"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: "gray", fontSize: 16 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="p-2 pl-10 bg-slate-200 w-full tracking-wider outline-gray-600 border-none rounded-full text-sm"
                  placeholder="Search pet..."
                />
              </div>
            </div>

            {/* right */}
            <div class="flex-1 flex items-center justify-end text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <div class="font-normal cursor-pointer ml-25 mr-2">WISHLIST</div>
              <div class="font-normal cursor-pointer ml-25 mr-2 text-xl">I</div>
              <div class="font-normal cursor-pointer ml-25">SIGN IN</div>
            </div>
          </div>
        </div>

        {/* CARD CRITERIA */}
        <div className="flex">
          <form method="POST" action="#">
            <div class="flex mx-40  md:mb-0 justify-center">
              <input
                class="block w-1/3 text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Name"
                id="user_name"
                name="user_name"
                value={formik.values.user_name}
                onChange={formik.handleChange}
              />
              {formik.touched.user_name && formik.errors.user_name ? (
                <span className="error text-red-600 italic text-sm ">
                  {formik.errors.user_name}
                </span>
              ) : null}
            </div>

            <div className="flex justify-center">
              <h3>Habitat</h3>
            </div>

            <div className="flex flex-wrap justify-between mx-40 items-center">
              {(bootcamps[0] || []).map((hab) => (
                <label class="relative flex w-56 mt-12 mb-10 bg-none items-center hover:scale-105">
                  <input
                    type="checkbox"
                    class="left-0 top-0 w-56 h-full hidden sr-only peer rounded-md"
                    name="crite_name"
                    id="crite_name"
                    onClick={onCheckHabitat(hab.hab_id)}
                  />
                  <div class="absolute p-5 flex items-center drop-shadow-lg bg-amber-100  w-11/12 duration-300 ease-in-out rounded-lg peer-checked:bg-emerald-200">
                    <div className="flex w-3/4 ml-14 items-end">
                      <div className="w-full">
                        <h1 className=" mb-1 truncate w-28 text-gray-800">
                          {hab.hab_name}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex flex-1 justify-end ml-40 peer-checked:rotate-45 duration-300 peer-checked:block items-center">
                    <div className="w-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 "
                        viewBox="0 0 20 20"
                        fill="#8a8a8a"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute ml-2 mr-2 w-16 h-16 border border-gray-400 rounded-full duration-300 ease-in-out bg-orange-300 flex items-center justify-center peer-checked:bg-emerald-400">
                    <img
                      className=" w-16 h-16 border border-gray-400 rounded-full"
                      src={`/storages/${hab.hab_url_image}`}
                      alt=""
                    />
                  </div>
                </label>
              ))}
            </div>

            <div className="flex justify-center">
              <h3>Criteria</h3>
            </div>

            <div className="flex flex-wrap justify-between mx-40 items-center">
              {(critetable[0] || []).map((crite) => (
                <label class="relative flex w-56 mt-12 mb-10 bg-none items-center hover:scale-105">
                  <input
                    type="checkbox"
                    class="left-0 top-0 w-56 h-full hidden sr-only peer rounded-md"
                    name="crite_name"
                    id="crite_name"
                    onClick={onCheckCriteria(crite.crite_id)}
                  />
                  <div class="absolute p-5 flex items-center drop-shadow-lg bg-amber-100  w-11/12 duration-300 ease-in-out rounded-lg peer-checked:bg-emerald-200">
                    <div className="flex w-3/4 ml-14 items-end">
                      <div className="w-full">
                        <h1 className=" mb-1 truncate w-28 text-gray-800">
                          {crite.crite_name}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex flex-1 justify-end ml-40 peer-checked:rotate-45 duration-300 peer-checked:block items-center">
                    <div className="w-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 "
                        viewBox="0 0 20 20"
                        fill="#8a8a8a"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute ml-2 mr-2 w-16 h-16 border border-gray-400 rounded-full duration-300 ease-in-out bg-orange-300 flex items-center justify-center peer-checked:bg-emerald-400">
                    <img
                      className=" w-16 h-16 border border-gray-400 rounded-full"
                      src={`/storages/${crite.crite_url_image}`}
                      alt=""
                    />
                  </div>
                </label>
              ))}
            </div>

            <div className="flex justify-center mt-10 py-3 text-right">
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="flex mr-4 justify-center w-28 py-2 px-4 rounded-lg border border-transparent shadow-sm text-sm font-medium text-slate-900 bg-white border-slate-800 hover:bg-red-200 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {isOpen ? (
        <CreateSuccess
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          petRecommendationData={petRecommendationData}
          userName={userName}
        />
      ) : null}
    </>
  );
}
