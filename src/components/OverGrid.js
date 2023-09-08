"use client";
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, createStyles, Text, Image  } from '@mantine/core';

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
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col >
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}