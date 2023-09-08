"use client";
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, createStyles, Text  } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(400);

const useStyles = createStyles((theme) => ({
    
Container: {
    width: "100%",
},


}));
export function Grid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  const { classes } = useStyles();

  return (
    <Container my="md" className={classes.Container} >
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
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