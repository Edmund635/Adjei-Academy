import CourseContainer from './CourseContainer'

function Home({courses}){
    return(
    <div>
        <CourseContainer courses={courses} />
    </div>
    )
}

export default Home