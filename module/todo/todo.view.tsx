"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spinner,
} from "@heroui/react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

import { TodoService } from "@/module/todo/todo.service";
import { CardComponent } from "@/module/todo/component/card.component";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function TodoView() {
  const {
    loadingAddData,
    loadingGetData,
    loadingUpdateData,
    listTodo,
    loadingLoadMore,
    loadMore,
    listGroup,
    setSetGroup,
    setGroup,
  } = TodoService();

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Todo List
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex gap-4 items-center justify-center py-4">
        {loadingGetData ? (
          <div className={`flex items-center justify-center w-full h-full`}>
            <Spinner />
          </div>
        ) : (
          listGroup.map((item, index) => {
            return (
              <Chip
                key={index}
                className={`cursor-pointer`}
                color="primary"
                onClick={() => {
                  setSetGroup(item);
                }}
              >
                {item}
              </Chip>
            );
          })
        )}
      </div>
      <div className={`flex flex-wrap flex-grow px-4 lg:px-8 py-4`}>
        {loadingGetData ? (
          <div className={`flex items-center justify-center w-full h-full`}>
            <Spinner />
          </div>
        ) : (
          listTodo.map((item, index) => {
            if (setGroup === "All") {
              return (
                <div key={index} className={`m-2`}>
                  {CardComponent({
                    status: item.status,
                    description: item.description,
                    title: item.title,
                    groupName: item.groupName,
                  })}
                </div>
              );
            }
            if (setGroup === item.groupName) {
              return (
                <div key={index} className={`m-2`}>
                  {CardComponent({
                    status: item.status,
                    description: item.description,
                    title: item.title,
                    groupName: item.groupName,
                  })}
                </div>
              );
            }
          })
        )}
        {loadingLoadMore ? (
          <div className={`flex items-center justify-center w-full h-full`}>
            <Spinner />
          </div>
        ) : null}
      </div>
      <Button
        color="primary"
        onPress={() => {
          loadMore();
        }}
      >
        Load More
      </Button>
    </>
  );
}
