import { createStyles, SimpleGrid, TextInput, Textarea, Button, Group, rem, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundColor: '#104b84',
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    backgroundColor: 'white',
    padding: rem(30),
    borderRadius: theme.radius.md,
    width: '80%',
    maxWidth: rem(600),
  },

  input: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
    color: theme.colors.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.colors.black,
  },

  control: {
    backgroundColor: '#104b84',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      backgroundColor: '#5d5d5d',
    },
  },

  formLabel: {
    color: theme.colors[theme.primaryColor][4],
    fontWeight: 'bold',
    marginBottom: rem(8),
  },
}));

export function FormField() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
        <Text size={32} mt={-40} align="center" weight={700} color="white">
          Contact
        </Text>
        <Text size={18} align="center" color="white" mt={5} mb={30}>
        Vul het onderstaande formulier in om contact met mij op te nemen.
        </Text>
      <div className={classes.formContainer}>
        <form target="_blank" action="https://formsubmit.co/Luukvink@icloud.com" method="POST">
          <label className={classes.formLabel}></label>
          <TextInput
            label="Uw naam"
            name="name"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            type="email"
            label="Email"
            name="email"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            type="Phone"
            label="Telefoonnummer"
            name="phone"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Uw Bericht"
            name="message"
            rows={10}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button type="submit" className={classes.control}>
              Verstuur
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
