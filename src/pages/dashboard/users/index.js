import { AddUserContent } from '@/sections/user/add-user-content';
import { useUserHook } from '@/sections/user/user-hook';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { UsersSearch } from 'src/sections/user/users-search';
import { UsersTable } from 'src/sections/user/users-table';

const Page = () => {
  const {
    page,
    rowsPerPage,
    users,
    usersSelection,
    handlePageChange,
    handleRowsPerPageChange,
    open,
    setOpen,
    data,
    search,
    setSearch
  } = useUserHook()




  return (
    <>
      <Head>
        <title>
          Users | YEQR
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Users
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={() => setOpen(!open)}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <UsersSearch
              search={search}
              setSearch={setSearch}
            />
            <UsersTable
              count={data.length}
              items={users}
              onDeselectAll={usersSelection.handleDeselectAll}
              onDeselectOne={usersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={usersSelection.handleSelectAll}
              onSelectOne={usersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={usersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {t('USER.ADD.TITLE')}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 , p: 1 , display: 'inline-block'}}
          >
            <AddUserContent />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
