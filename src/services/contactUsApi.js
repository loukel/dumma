import { q, client } from "@/lib/faunadb"

export const sendMessage = async (data) => {
  let result
  try {
    result = await client.query(
      q.Create(
        q.Collection('Messages'),
        {
          data,
        },
      )
    )
    if (result.name === 'BadRequest') return -1// if there's an error in the data creation
  } catch (error) {
    result = -1
    return 
  }

  return result
}

export const getMessages = async () => {
  let result
  try {
    result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Messages'))),
        q.Lambda(x => q.Get(x))
      )
    )
    console.log(result)

    if (result.name === 'BadRequest') return -1// if there's an error in the data creation
  } catch (error) {
    result = -1
    return 
  }

  return result.data
}

export const updateMessage = async (messageId, data) => {
  let result
  // Find reference to the message by id then replace that
  try {
    result = await client.query(
      q.Replace(
        q.Ref(q.Collection('Messages'), messageId),
        {
          data,
        },
      )
    )

    if (result.name === 'BadRequest') return -1// if there's an error in the data creation
  } catch (error) {
    result = -1
    return 
  }

  return result
}