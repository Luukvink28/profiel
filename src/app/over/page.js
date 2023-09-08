"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Vragen } from "@/components/Vragen";
import { Grid } from "@/components/Grid";
import { createStyles, Title } from '@mantine/core';


const useStyles = createStyles((theme) => ({

  title: {
    color: "black",
    fontSize: 52,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xl} * 0,5)`,
  },
}));



export default function Over() {
  const { classes } = useStyles();
  return (
    <>
    <Navbar/>
    <Title align="center" className={classes.title}>
              Over mij
            </Title>
    <Grid/>
    <Vragen/>
    <Footer/>
    </>
  )
}


