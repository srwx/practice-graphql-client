import { client } from "graphql/apollo-client"
import { GetBooksDocument, Book } from "graphql/codegen/graphql"
import { GetStaticProps } from "next"

export default function Home({ books }: { books: Book[] }) {
  return (
    <>
      {books.map((book) => (
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

  console.log(data)

  return {
    props: {
      books: data.books,
    },
  }
}
