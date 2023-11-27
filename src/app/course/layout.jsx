import Course from "./Course"

export const metadata = {
    title: 'courses in my library',
    descriprion: 'Frontend 6b6 class 1 on React',
    keywords: 'React, Next, JavaScript'
  }


  
  export default function layout( {children} ) {
    return (
      <div>
        <Course/>
        
        {children}
      </div>
    )
  }
  