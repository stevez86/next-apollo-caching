import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`

const FooUserQuery = gql`
    query FooUserQuery {
        fooUser {
            id
            name
            status
            foo {
                id
                name
            }
        }
    }
`

const Index = () => {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery)

  const {
    data: { fooUser },
  } = useQuery(FooUserQuery)

  if (viewer) {
    return (
      <div>
        {viewer &&       <div>
          You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
          <Link href="/about">
            <a>static</a>
          </Link>{' '}
          page.
        </div>}
        <pre>{JSON.stringify(fooUser)}</pre>
      </div>
    )
  }

  return null
}

export default withApollo(Index)
