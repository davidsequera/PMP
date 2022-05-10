import React from 'react'
import './styles/Dashboard.css'
import UserCourse from '../microcomponents/UserCourse'
import { useQuery, gql } from "@apollo/client"
import Loading from '../microcomponents/Loading'
import { Redirect } from 'react-router-dom'

const USERCOURSES = gql`
    query UserCourses{
      user{
        name
        email
        courses{
          id
          name
          total
          value
        }
      }
    }
`

const Dashboard = () => {
    const { loading, error, data} = useQuery(USERCOURSES);
      if  (loading){
        return <Loading/>
      }
      if (error) {
        return <Redirect to="/" />
      }


        return(
                <div className="Page-container" id="Dashboard">
                        <section id="Dashboard-user">
                            <div className="Dashboard-ball" >
                                <p>
                                    {data.user.name[0].toUpperCase()}
                                </p>
                                </div>
                            <h1 className="Dashboard-user_name">{data.user.name[0].toUpperCase() + data.user.name.slice(1).toLowerCase()}</h1>
                        </section>
                        <section id="Dashboard-courses">
                            {data.user.courses.filter(e => e.value).map((e) => {
                            return (
                                <UserCourse key={e.id} link={e.id} title={e.name} total={e.total} value={e.value} ></UserCourse>)
                            })}
                            
                        </section>
                </div>
            )
}

export default Dashboard