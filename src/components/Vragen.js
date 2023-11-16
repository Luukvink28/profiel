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
  
  const antwoord1 = "Ik zou graag, in goede gezondheid, volledig zelfredzaam willen worden. M'n zaakjes goed op orde; een leuke en uitdagende baan met mooie benefits ;), een lekker woning en een fijne groep mensen om mij heen. Belangrijk is wel dat ik wel 'gevoed' moet blijven worden. Gevoed als in dat de dingen voor mij niet saai moeten worden, maar ik er door uitgedaagd blijf worden, zeker op werkgebied.";

  const antwoord2 = "Ik heb verschillende inspiratiebronnen. Ik kan geinspireerd raken door kleine dagelijkse dingen zoals bijvoorbeeld een goede kop koffie of een lekker nummer. Op school word ik getriggerd door de lesstof. Het steeds meer te weten komen over een bepaald onderwerp, dus je steeds meer verdiepen in de materie om zo te ontdekken wat de samenhang is, het proces te snappen. Rode draad in de dingen die mij inspireren is verdieping: precies leren hoe alles werkt en hoe de dingen functioneren.";

  const antwoord3 = "Ik wil graag na mijn stage aan het werk en het liefts bij het bedrijf waar ik stage heb gelopen. en ook tegelijkertijd een hbo studie doen.";

  const antwoord4 = "Ik denk dat ik een rustige student ben. en daarom fijn om mee samen te werken.";
  
  const antwoord5 = "Ik denk dat  ik een beetje in het midden sta. Ik ben niet de leider, maar ook niet de volger. Ik ben wel iemand die graag de touwtjes in handen heeft.";

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