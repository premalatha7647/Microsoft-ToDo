import axios from '@/data/axios'
import type { AxiosError } from 'axios'

async function addTask(task: string) {
  try {
    const response = await axios.post('addtask', task)
    return response
  } catch (error) {
    const _error = error as AxiosError<string>
    return {
      success: false,
      status: _error.response?.status,
      content: null
    }
  }
}

export default {
  addTask
}
