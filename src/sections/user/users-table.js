import { DATE_FORMAT } from '@/common/constants/format-date';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/common/components/scrollbar';
import { getInitials } from 'src/common/utils/get-initials';

export const UsersTable = (props) => {
  const { t } = useTranslation();
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  {t('USER.TABLE.NAME')}
                </TableCell>
                <TableCell>
                  {t('USER.TABLE.EMAIL')}
                </TableCell>
                <TableCell>
                  {t('USER.TABLE.ADDRESS')}
                </TableCell>
                <TableCell>
                  {t('USER.TABLE.PHONE')}
                </TableCell>
                <TableCell>
                  {t('USER.TABLE.BIRTH')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer?.id);
                const birth = moment(customer?.birth).format(DATE_FORMAT);
                return (
                  <TableRow
                    hover
                    key={customer?.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer?.id);
                          } else {
                            onDeselectOne?.(customer?.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar src={customer?.avatar}>
                          {getInitials(customer?.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer?.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {customer?.email}
                    </TableCell>
                    <TableCell>
                      {customer?.address}
                    </TableCell>
                    <TableCell>
                      {customer?.phone}
                    </TableCell>
                    <TableCell>
                      {birth}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

UsersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
