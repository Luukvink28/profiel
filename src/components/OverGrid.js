"use client";
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, createStyles, Text, Image, Box,  } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(400);

const useStyles = createStyles((theme) => ({
    
Container: {
    width: "100%",
},


}));
export function OverGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = rem(228);
  const { classes } = useStyles();

  return (
    <Container my="md" className={classes.Container} >
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Image src="profiel2.JPG" radius="md"/>
        <Grid gutter="md">
          <Grid.Col>
          <Box sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            fontSize: 18,
            fontWeight: 500,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            height: rem(180),
            })}>
              <Text>
                bla bla bla
              </Text>
          </Box>
          </Grid.Col>
          <Grid.Col >
          <Box sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            fontSize: 18,
            fontWeight: 500,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            height: rem(180),
            })}>
              <Text>
                bla bla bla
              </Text>
          </Box>          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}