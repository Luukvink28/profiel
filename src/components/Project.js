import React, { useEffect, useState } from 'react';
import { createStyles, Text, Title, Image, rem, Button } from '@mantine/core';
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
  
    marginRight: '5%',
    
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

  link: {
    textDecoration: 'none',
    color: 'white',
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
            <Title className={classes.title}>{project.name}</Title>
            <Text fw={500} color='dimmed' pr={50} fz="md" mb={20}>{project.beschrijving}</Text>
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
          </div>
          <Image src={project.foto} className={classes.image} />
        </div>
      ))}
    </div>
  );
}
