"use client";
import { createStyles, Text, Title, Button, Image, MediaQuery } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.md} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
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
    maxWidth: '100%',
    minWidth: '200px',
    height: 'auto',
    position: 'relative',
  },

  body: {
    width: '30rem',
    marginRight: '19%',

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

  beschrijving: {
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

  link: {
    color: 'white',
    textDecoration: 'none',
  }
}));

export function Project({ projects }) {
  const { classes } = useStyles();

  if (!projects || projects.length === 0) {
    return <Text>No projects available</Text>;
  }

  return (
    <div>
      {projects.map((project, key) => (
        <div className={classes.wrapper} key={key}>
          <div className={classes.body}>
            <MediaQuery query="(max-width: 600px)" styles={{ marginLeft: '15%' }}>
              <Title className={classes.title}>{project.name}</Title>
            </MediaQuery>

            <MediaQuery query="(max-width: 600px)" styles={{ marginLeft: '16%', maxWidth: '80%', padding: 0 }}>
              <Text className={classes.beschrijving} fw={500} color="dimmed" pr={50} fz="md" mb={20}>
                {project.description}
              </Text>
            </MediaQuery>

            <MediaQuery query="(max-width: 600px)" styles={{ marginLeft: '17%' }}>
              <Button className={classes.button}>
                <a
                  href={project.url}
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.buttonText}
                </a>
              </Button>
            </MediaQuery>
          </div>

          <MediaQuery query="(max-width: 600px)" styles={{ maxWidth: '100%', minWidth: '100%' }}>
            <Image src={project.image} className={classes.image} />
          </MediaQuery>
        </div>
      ))}
    </div>
  );
}
