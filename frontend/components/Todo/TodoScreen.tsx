import { VStack } from "@chakra-ui/react"
import { TodoList } from "./TodoList"
import { useGetTodosQuery } from "../../graphql/generated/generated-types"
import { TodoInput } from "./TodoInput"
import { useMemo, useState } from "react"
import { TodoFilter } from "./TodoFilter"

export const FILTER_VALUES = ["ALL", "COMPLETED", "NOT COMPLETED"] as const
type FilterTupel = typeof FILTER_VALUES
export type Filter = FilterTupel[number]

export const TodoScreen = () => {
  const { data } = useGetTodosQuery()

  const [filter, setFilter] = useState<Filter>("ALL")

  const todos = useMemo(() => {
    if (!data) return []

    switch (filter) {
      case "ALL":
        return data.getTodos
      case "COMPLETED":
        return data.getTodos.filter((todo) => todo.completed)
      case "NOT COMPLETED":
        return data.getTodos.filter((todo) => !todo.completed)
    }
  }, [data, filter])

  return (
    <VStack w='full' spacing={10} paddingX={48} paddingY={16}>
      <TodoInput />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} />
    </VStack>
  )
}
