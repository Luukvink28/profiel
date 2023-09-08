"use client";
import {
    createStyles,
    Container,
    Accordion,
    ThemeIcon,
    MantineProvider,
    getStylesRef,
    rem,
  } from '@mantine/core';
  import { IconPlus } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      minHeight: rem(320),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
      color: theme.black,
      marginBottom: '-60px',
    },

    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      overflow: 'hidden',
    },
  
    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
      color: theme.black,
  
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  
    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },
  
    icon: {
      ref: getStylesRef('icon'),
      marginLeft: theme.spacing.md,
    },
  
    gradient: {
      backgroundColor: "#104b84"
    },
  
    itemOpened: {
      [`& .${getStylesRef('icon')}`]: {
        transform: 'rotate(45deg)',
      },
    },
  
    button: {
      display: 'block',
      marginTop: theme.spacing.md,
  
      [theme.fn.smallerThan('sm')]: {
        display: 'block',
        width: '100%',
      },
    },
  }));
  
  const antwoord1 = "toekomst";

  const antwoord2 = "toekomst";

  const antwoord3 = "toekomst";

  const antwoord4 = "toekomst";
  
  const antwoord5 = "toekomst";

  export function Vragen() {
    const { classes } = useStyles();
    return (
      <MantineProvider inherit theme={{ colorScheme: 'light' }}>
        <div className={classes.wrapper}>
          <Container size="sm">
  
            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              chevronSize={50}
              variant="separated"
              disableChevronRotation
              chevron={
                <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                  <IconPlus size="1.05rem" stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Accordion.Item className={classes.item} value="Toekomst">
                <Accordion.Control>Wat wil je bereiken in de toekomst?</Accordion.Control>
                <Accordion.Panel>{antwoord1}</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="Inspirerend">
                <Accordion.Control>Wat vindt/vond je inspirerend?</Accordion.Control>
                <Accordion.Panel>{antwoord2}</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="Naartoe">
                <Accordion.Control>Waar wil je naartoe?</Accordion.Control>
                <Accordion.Panel>{antwoord3}</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="Student">
                <Accordion.Control>Wat ben je voor type student, hoe zien anderen jou?</Accordion.Control>
                <Accordion.Panel>{antwoord4}</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="groep">
                <Accordion.Control>Waar sta je in de groep?</Accordion.Control>
                <Accordion.Panel>{antwoord5}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </MantineProvider>
    );
  }