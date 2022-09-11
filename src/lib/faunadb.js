import faunadb from 'faunadb'

export const q = faunadb.query

export const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNA_KEY,
})