import React, { useEffect, useState } from 'react';
import { createStyles, Text, Title, Image, rem, Button, MediaQuery } from '@mantine/core';
import { supabaseClient } from '../app/lib/supabaseClient';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: '5px',
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
    border: '2px solid Black',
    borderRadius: '5px',
    padding: '2px',
    maxWidth: '50%',
    minWidth: '50%',
  },

  body: {
    width: '30rem',
    marginRight: '15%',

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

  link: {
    textDecoration: 'none',
    color: 'white',
  },

  beschrijving:{
    width: '30rem',
  },

  button: {
    backgroundColor: '#104b84',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      transition: 'all 0.2s ease-in-out',
      backgroundColor: '#5d5d5d',
    },
  },
}));

const GetProjects = async function () {
  let { data, error } = await supabaseClient.from('projecten').select('*');

  if (error) {
    return [];
  }

  if (data) {
    return data;
  }
};

export function Project() {
  const { classes } = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const projectData = await GetProjects();
      setProjects(projectData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {projects.map((project, key) => (
        <div className={classes.wrapper} key={key}>
          <div className={classes.body}>
          <MediaQuery query="(max-width: 600px)" styles={{ marginLeft: '17%'}}>

            <Title className={classes.title}>{project.name}</Title>

          </MediaQuery>
          <MediaQuery query="(max-width: 600px)" styles={{ marginLeft: '18%', maxWidth: '75%'}}>

            <Text className={classes.beschrijving} fw={500} color='dimmed' pr={50} fz="md" mb={20}>{project.beschrijving}</Text>

            </MediaQuery>
            <MediaQuery query="(max-width: 600px)" styles={{ marginLeft: '19%'}}>

            <Button className={classes.button}>
              <a
                href={project.url}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button}
              </a>
            </Button>

            </MediaQuery>
          </div>
          <MediaQuery 
          query="(max-width: 600px)"
          styles={{maxWidth: '100%', minWidth: '100%'}}
          >
          <Image src={project.foto} className={classes.image} />
          </MediaQuery>
        </div>
      ))}
    </div>
  );
}
