import { VStack } from "@chakra-ui/react"
import { TodoList } from "./TodoList"
import { useGetTodosQuery } from "../../graphql/generated/generated-types"
import { TodoInput } from "./TodoInput"

export const TodoScreen = () => {
  const { data } = useGetTodosQuery()

  return (
    <VStack w='full' spacing={10} paddingX={48} paddingY={16}>
      <TodoInput />
      <TodoList todos={data?.getTodos ?? []} />
    </VStack>
  )
}
