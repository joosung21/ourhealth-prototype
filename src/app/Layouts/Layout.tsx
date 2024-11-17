import { Outlet } from 'react-router-dom';
import { AppShell, Burger, Group, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '@/assets/logo.png';
import { useCounterStore } from '@/stores/useCounterStore';
import AvatarDropdown from './AvatarDropdown';
import LavLinks from './NavLinks';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const count = useCounterStore((state) => state.count);
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      style={{ minWidth: '300px' }}
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header style={{ minWidth: '300px' }}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image
              src={logo}
              alt="OurHealth logo"
              h={36}
              onClick={() => (window.location.href = '/')}
              className="cursor-pointer"
            />
          </Group>
          {count !== 0 && (
            <Text c="red" fw={700} size="xl">
              Store: {count}
            </Text>
          )}
          <AvatarDropdown />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <LavLinks />
      </AppShell.Navbar>

      <AppShell.Main className="bg-slate-50 max-sm:px-0 pb-10">
        <Outlet />
        <ScrollToTop />
      </AppShell.Main>
    </AppShell>
  );
}
