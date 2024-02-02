"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
const useStyles = createStyles((theme) => ({

  title: {
    color: "black",
    fontSize: 52,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xl} * 0,5)`,
  },



}));





export default function Projecten() {
  const { classes } = useStyles();

  return (
    <>
    <Navbar/>
    <Title className={classes.title} mb={20} align="center" >Projecten</Title>
    <Project/>
    <Footer/>
    </>
  )
}


