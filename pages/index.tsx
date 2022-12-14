import { gql } from "@apollo/client"
import { client } from "graphql/apollo-client"
import { GetBooksDocument } from "graphql/codegen/graphql"
import { GetStaticProps } from "next"

export default function Home({ books }: { books: any }) {
  return (
    <>
      {books.map((book: any) => (
        <div key={book.id}>
          {book.id}. {book.name}
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GetBooksDocument,
  })

  return {
    props: {
      books: data.books,
    },
  }
}
