import userData from './data/userData.json'
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"
import { Profile } from './components/Profile/Profile'
import { FriendList } from './components/FriendList/FriendList'
import { Transactions } from './components/Transactions/Transactions'

export default function App () {
  return (
    <>
     <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <hr />
      <FriendList friends={friends} />
      <hr />
      <Transactions items={transactions} />
    </>
  )
}

