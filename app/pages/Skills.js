"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex flex-col  items-center justify-center w-full h-[500px]  mt-12">  
      <span className="text-3xl font-bold text-center mb-5 border-b-2 border-black">
        My Skills
      </span>

      <div className="flex flex-row items-center justify-center">
        <div className="items-center flex justify-center  w-[50%] h-[50%] ">
          <Image
            className="ml-32"
            src="/skill.png"
            alt="Picture of the author"
            width={300}
            height={300}
          ></Image>
        </div>

        <div className=" w-[50%] h-[50%] flex flex-col gap-3 mr-24 mb-6">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Technical Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ReactJs, NodeJs, NextJs, MongoDB, HTML, CSS(Tailwind),
                Javascript,JQuery,Bootstrap,Firebase
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Social Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Perseverance, compatibility, tendency to teamwork,
                responsibility, regularity
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Projects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Github : https://github.com/mahzunes</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Skills;
