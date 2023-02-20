import { NavCard } from "@fremtind/jkl-card-react";
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { ArrowDown } from "@fremtind/jkl-icons-react";
import Beach from "../images/beach-lady.jpg";
import BeachNight from "../images/beach-night.jpg";
import Town from "../images/town.jpg";

import "@fremtind/jkl-card/card.min.css";

export const Områder = ({ objects }) => {
  const [value, setValue] = useState(null);
  const [showModal, setShowModal] = useState(undefined);

  const propertyTown = objects.map((property) => {
    return property.town;
  });

  const noDuplicates = [...new Set(propertyTown)];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="content">
        <div className="select-wrapper">
          <label className="select-label">Velg et boligområde</label>
          <select
            className="select"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            {noDuplicates.map((town, id) => {
              return (
                <>
                  <option value="" disabled selected hidden></option>
                  <option key={id} value={town}>
                    {town}
                  </option>
                </>
              );
            })}
          </select>
          {value === null ? (
            <div className="img-3-container">
              <img className="img-3" alt="" src={Beach} />
              <img className="img-3" alt="" src={Town} />
              <img className="img-3" alt="" src={BeachNight} />
            </div>
          ) : (
            <div className="area-content">
              {objects.map((property, id) => {
                if (value === property.town) {
                  let type =
                    property.type === "Apartment"
                      ? "Leilighet"
                      : property.type === "Land"
                      ? "Tomt"
                      : property.type === "Town House"
                      ? "Rekkehus"
                      : property.type === "Commercial"
                      ? "Leilighet"
                      : property.type === "Country House"
                      ? "Landssted"
                      : property.type === "Village House"
                      ? "Landsbyhus"
                      : property.type === "Penthouse"
                      ? "Toppleilighet"
                      : property.type;
                  return (
                    <>
                      <NavCard
                        className="jkl-nav-card"
                        padding="m"
                        key={property.id}
                        title={type}
                        description={`€${property.price}`}
                        onClick={() => setShowModal(id)}
                      >
                        <div className="sections">
                          <div className="modal-section">
                            Bad: {property.baths}
                          </div>

                          <div className="modal-section">
                            Soverom: {property.beds}
                          </div>
                        </div>

                        <div className="nav-card-img-container">
                          <img
                            className="nav-card-img"
                            src={property.images.image[0].url}
                            alt=""
                          />
                        </div>
                      </NavCard>
                      <Modal
                        id={property.id}
                        title={type}
                        town={property.town}
                        baths={property.baths}
                        price={property.price}
                        beds={property.beds}
                        pools={property.pool}
                        desc={property.desc.en}
                        images={property.images.image}
                        onClose={() => setShowModal(false)}
                        showModal={showModal === id}
                      />
                    </>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </motion.main>
  );
};
