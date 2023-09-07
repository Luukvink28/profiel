import { createStyles, Text, Title, Image, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  imageWrapper: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    maxWidth: "100%",
    minWidth: "60%",
    marginRight: "40",
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('md')]: {
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
}));

export function Banner() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Luuk Vink</Title>
        <Text fw={500} pr={50} fz="lg" mb={5}>
          Student Grafish Lyceum Rotterdam - Software Developer
        </Text>
      </div>
      <div className={classes.imageWrapper}>
        <Image src="Profiel.JPG" className={classes.image} />
      </div>
    </div>
  );
}
