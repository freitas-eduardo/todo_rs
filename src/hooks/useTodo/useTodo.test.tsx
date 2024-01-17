import { describe, it } from "vitest";
import { useTodo } from './useTodo'
import { renderHook, act } from '@testing-library/react-hooks'


const mockTask =
{
  id: '1',
  content: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
  isDone: true
}

describe('useTodo', () => {
  it('should add a new task  ', () => {
    const { result } = renderHook(() => useTodo())
    act(() => result.current.addTask(mockTask))
    expect(result.current.tasks.length).toBe(3)

  });
  it('should remove a task ', () => {
    const { result } = renderHook(() => useTodo())

    act(() => result.current.removeTask(result.current.tasks[0].id))
    expect(result.current.tasks.length).toBe(1)

  });

  it('should toggle status task ', () => {
    const { result } = renderHook(() => useTodo())

    act(() => result.current.toggleTask(result.current.tasks[0].id))
    expect(result.current.tasks[0].isDone).toBe(false)
  });


});
