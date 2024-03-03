import { useSelection } from "@/common/hooks/use-selection";
import { userService } from "@/common/services";
import { applyPagination } from "@/common/utils/apply-pagination";
import { useCallback, useEffect, useMemo, useState } from "react";

const now = new Date();


const useUsers = (page, rowsPerPage, data) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage, data]
  );
};

const useUserIds = (users) => {
  return useMemo(
    () => {
      return users.map((user) => user.id);
    },
    [users]
  );
};


export const useUserHook = (props) => {
  // const { ... } = props;
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([])
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const users = useUsers(page, rowsPerPage, data);
  const usersIds = useUserIds(users);
  const usersSelection = useSelection(usersIds);

  const fetchUser = async () => {
    try {
      const result = await userService.getList({
        page,
        limit: rowsPerPage,
        search
      });
      if (result?.data) {
        setData(result.data)
        return result.data
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchUser();
    }, 1000);
    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);



  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return {
    page,
    setPage,
    open,
    setOpen,
    data,
    setData,
    rowsPerPage,
    setRowsPerPage,
    users,
    usersIds,
    usersSelection,
    handlePageChange,
    handleRowsPerPageChange,
    search,
    setSearch,
  }
};