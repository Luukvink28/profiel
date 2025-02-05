import React from 'react';
import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontstyle: 'arial',
    fontFamily: 'arial',
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  headerContent: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
    fontFamily: 'arial',
  },
  forward: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={20}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <div className={classes.headerContent}>
            <Link className={classes.forward} href="/">
              <div className={classes.title}>Luuk Vink</div>
            </Link>
          </div>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/projecten" className={classes.link}>
            Projecten
          </Link>
          <Link href="/over" className={classes.link}>
            Over mij
          </Link>
          <Link href="/contact" className={classes.link}>
            Contact
          </Link>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigatie"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/projecten" className={classes.link}>
            Projecten
          </Link>
          <Link href="/over" className={classes.link}>
            Over mij
          </Link>
          <Link href="/contact" className={classes.link}>
            Contact
          </Link>
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
