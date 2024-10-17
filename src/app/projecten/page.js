"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
import { Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    color: "black",
    fontSize: 52,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xl} * 0,5)`,
  },
}));

const projectData = [
  {
    name: 'Fysio Yperlaan',
    description: 'Ik heb deze website gemaakt met react in het framework next.js. het is in opdracht gebouwd voor een fysiotherapie yperlaan..',
    image: 'fysio.png',
    url: 'https://fysiotherapie-yperlaan.vercel.app/',
    buttonText: 'Bekijk de site!',
  },
  {
    name: 'Immersive tech week',
    description: 'Ik deze app gebouwd met 4 andere studenten met react native. Het is een app die is gemaakt voor de immersive tech week met de opdracht van 360Fabriek.',
    image: 'techweek.png',
    url: 'https://youtu.be/QpNEgfL8ll0',
    buttonText: 'Bekijk de video!',
  },
];

export default function Projecten() {
  const { classes } = useStyles();

  return (
    <>
      <Navbar />
      <Project projects={projectData} />
      <Footer />
    </>
  );
}
