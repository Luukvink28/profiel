"use client"
import { createStyles, Text, Title, Image, rem, Button } from '@mantine/core';
import { supabaseClient } from '../app/lib/supabaseClient';
import React from 'react';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.md} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    border: "2px solid Black",
    borderRadius   : "10px",
    padding: "2px",
    maxWidth: '50%',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 12)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  link:{
    textDecoration: 'none',
    color : "white",
  },
  button:{
    backgroundColor: "#104b84",
    transition: 'all 0.2s ease-in-out',
    ':hover': {
        transition: 'all 0.2s ease-in-out',
        backgroundColor: '#5d5d5d',
      },
  }
}));


GetProjects = async function() {
  let {data, error} = await supabaseClient.from('projecten').select('*');

  if (error) {
    return
  }

  if (data) {
    return data
  }
}


export function Project() {
  const { classes } = useStyles();
  let { Project } = GetProjects();

  console.log(Project)
  return (
    <div>
      {/* {Project.map((project, key) => ( */}
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>{}</Title>
            <Button className={classes.button}>
              <a href="https://fysiotherapie-yperlaan.vercel.app/" className={classes.link} target="_blank">
                Bekijk website
              </a>
            </Button>
          </div>
          <Image src="fysio.png" className={classes.image} />
        </div>
      {/* ))} */}
    </div>
  );
}