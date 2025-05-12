import { useEffect, useState } from "react";

import { ListDatumModelToDoList } from "@/domain/model/model.todo";
import TodoRepository from "@/domain/repository/todo.repository";
import Toast from "@/core/toast";

export const TodoService = () => {
  const [loadingGetData, setLoadingGetData] = useState(false);
  const [loadingAddData, setLoadingAddData] = useState(false);
  const [loadingUpdateData, setLoadingUpdateData] = useState(false);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);
  const [listGroup, setListGroup] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);

  const [setGroup, setSetGroup] = useState<string>("All");

  const [listTodo, setListTodo] = useState<ListDatumModelToDoList[]>([]);

  useEffect(() => {
    getListTodo();
  }, []);

  const getListTodo = async () => {
    setLoadingGetData(true);
    try {
      const resp = await TodoRepository.getTodo({
        page: page,
        limit: 10,
      });

      const groupName = resp.result.listData.map((item) => item.groupName);
      const uniqueGroupName = Array.from(new Set(groupName));

      setListGroup(["All", ...uniqueGroupName]);

      setListTodo(resp.result.listData);
    } catch (error: any) {
      Toast.callToastError(error.message);
    } finally {
      setLoadingGetData(false);
    }
  };

  const loadMore = async () => {
    setLoadingLoadMore(true);
    try {
      const resp = await TodoRepository.getTodo({
        page: page + 1,
        limit: 10,
      });

      setListTodo((prev) => [...prev, ...resp.result.listData]);
      setPage(page + 1);
      const groupName = resp.result.listData.map((item) => item.groupName);
      const uniqueGroupName = Array.from(new Set(groupName));

      setListGroup((prev) => [...prev, ...uniqueGroupName]);
    } catch (error: any) {
      Toast.callToastError(error.message);
    } finally {
      setLoadingLoadMore(false);
    }
  };

  return {
    loadingGetData,
    loadingAddData,
    loadingUpdateData,

    listTodo,
    loadMore,
    loadingLoadMore,
    listGroup,
    setSetGroup,
    setGroup,
  };
};
