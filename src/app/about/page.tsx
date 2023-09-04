"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
import { Title, createStyles,rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({

title: {
  textAlign: 'center',
  paddingBottom: '20px',
  fontSize: rem(34),
      fontWeight: 900,
 },



}));





export default function About() {
  const { classes } = useStyles();

  return (
    <>
    <Navbar/>
    <Title className={classes.title}>Projecten</Title>
    <Project/>
    <Footer/>
    </>
  )
}


