import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
import Link from 'next/link';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <Link href="https://twitter.com/Luuk421" style={{ textDecoration: 'none' }}>
              <IconBrandTwitter color='black' size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://www.youtube.com/channel/UC9wltPLhLxAxYVRqvm1rMmA" style={{ textDecoration: 'none' }}>
              <IconBrandYoutube color='black' size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href='https://www.instagram.com/luuk._vk/' style={{ textDecoration: 'none' }}>
              <IconBrandInstagram color='black'  size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
