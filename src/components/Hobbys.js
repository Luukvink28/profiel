"use client";
import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
} from '@mantine/core';
import { IconBallBasketball, IconCamera, IconCode } from '@tabler/icons-react';

const mockdata = [
    {
        title: 'Basketball',
        description: 'Ik basketbal graag dat is een van mijn grootste hobbys waar ik graag tijd aan besteed.',
        icon: IconBallBasketball,
    },
    {
        title: 'Fotografie',
        description: 'Fotos maken doe ik ook graag. Vooral in de zaal van de basketbal wedstrijden. Ik heb een eigen camera en maak graag fotos.',
        icon: IconCamera,
    },
    {
        title: 'Programmeren',
        description: 'Programmeren doe ik ook graag natuurlijk. ik doe daarom ook de opleiding software developer op het Grafish Lyceum Rotterdam. ik zit nu in mijn tweede jaar en heb het erg naar mijn zin.',
        icon: IconCode,
    },
];

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: "#104b84",
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: "#104b84",
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

export function Hobbys() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color="#104b84" />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                Wat ik doe in mijn dagelijks leven
            </Title>
            <Text c="dimmed" className={classes.description} ta="center" mt="md" pt="sm"></Text>
            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
