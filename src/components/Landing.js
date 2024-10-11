import { React, useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { MainSection } from "./MainSection";
import { LearningSection } from "./LearningsSection";
import { MoreInfoSection } from "./moreInfoSection";
import { CopyrightSection } from "./copyrightSection";
import axios from "axios";

export const Landing = () => {
  const [data, setData] = useState([]);
  const [whatsapp, setWhatsapp] = useState("");
  const [page, setPage] = useState("");
  const { id, lang } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await api.get();
      const sections = data.result.find((item) => item._id === page).content;
      sections.forEach((element) => {
        element.whatsapp = whatsapp;
      });
      setData(sections);
    } catch (error) {
      console.log("error", error);
    }
  };

  const validateId = async () => {
    try {
      const { data } = await axios.get(
        `https://mmgenerator-api-production.up.railway.app/api/subscription/customer/${id}`,
        {
          headers: {
            "Content-Type": "text/json",
          },
        }
      );
      if (data.statusCode === 200) {
        setWhatsapp(validarURL(data.whatsapp || ""));
      } else {
        navigate("/");
      }
      return true;
    } catch (error) {
      return false;
    }
  };
  const validarURL = (cadena) => {
    if (!/^https?:\/\//i.test(cadena)) {
      cadena = "http://" + cadena;
    }
    return cadena;
  };
  useEffect(() => {
    switch (lang) {
      case "es":
        setPage("2ed68eb4-5f96-45bf-b5cf-8ecc995a24a7");
        break;
      case "en":
        setPage("0b85b77e-fe8c-455b-9028-1d56b12b53a5");
        break;
      case "pt":
        setPage("14b40a16-8822-4438-9d33-caa6da5aff76");
        break;
      default:
        setPage("2ed68eb4-5f96-45bf-b5cf-8ecc995a24a7");
        break;
    }
    validateId().then((value) => {
      if (value) {
        getData();
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, [whatsapp]);

  return (
    <>
      {data.map((section) => (
        <div key={section._key}>
          {section.sectionType === "main" ? (
            <MainSection key={section._key} section={section} />
          ) : null}
          {section.sectionType === "learnings" ? (
            <LearningSection key={section._key} section={section} />
          ) : null}
          {section.sectionType === "moreInfo" ? (
            <MoreInfoSection key={section._key} section={section} />
          ) : null}
          {section.sectionType === "copyright" ? (
            <CopyrightSection key={section._key} section={section} />
          ) : null}
        </div>
      ))}
    </>
  );
};
