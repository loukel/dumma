import { q, client } from "@/lib/faunadb"

export const signUpUser = async (data) => {
  let result
  try {
    result = await client.query(
      q.Create(
        q.Collection('SessionUsers'),
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

export const getEventUsers = async (eventId) => {
  let result
  try {
    result = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('eventId'), eventId)),
        q.Lambda(x => q.Get(x))
      )
    )

    if (result.name === 'BadRequest') return -1// if there's an error in the data creation
  } catch (error) {
    result = -1
    return 
  }

  return result.data
}