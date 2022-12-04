import React from "react";
import { motion } from "framer-motion";
import cardImage from "./assets/card-image.jpg";
import TripsInfo from "../../Trips/TripsInfo";

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2
    }
  },
  inactive: {
    display: "none"
  }
};

const itemVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  },
};


interface IProps {
  active: boolean
  children: React.ReactNode | React.ReactNode[]
}

const TabContent = ({ active, children }: IProps) => (
  <motion.div
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <motion.div 
      variants={itemVariant}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default TabContent;