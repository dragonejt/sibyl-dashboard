"use client";

import { AppShell, Avatar, Burger, Group, Space, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group>
          <Space />
          <Avatar src="./icon.png"></Avatar>
          <Title>Sibyl System</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Communities</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
