import { get, post } from "@/core/api";
import { ConvertModelToDoList } from "@/domain/model/model.todo";

class TodoRepository {
  async addTodo(todo: { title: string; description: string }) {
    const resp = await post("todo-list/add", {
      title: todo.title,
      description: todo.description,
    });

    return ConvertModelToDoList.toModelToDoList(resp);
  }

  async getTodo(data: { page: number; limit: number }) {
    const resp = await get(
      "todo-list/?page=" + data.page + "&limit=" + data.limit,
    );

    return ConvertModelToDoList.toModelToDoList(resp);
  }

  async getDetailTodo(id: string) {
    return await get("todo-list/detail/" + id);
  }

  async updateTodo(data: { id: string; status: string }) {
    return await post(`todo-list/update-status/${data.id}`, {
      status: data.status,
    });
  }
}

export default new TodoRepository();
