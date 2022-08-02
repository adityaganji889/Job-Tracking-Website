# Job-Tracking-Website
An online job tracking software streamlining an applicant in tracking his/her progress during the job search process. Helps the user in tracking the number of pending, interview and declined applications.
It's main functionalities include : 
- Login/Register user utilizing JWT Authentication and Authorization.
- Enabling viewing of their applied jobs and specific details.
- Add Job facilitates applicant to append a new job and relevant details being reflected in that particular applicant All Jobs list.
- Also the specific logged in user avails updation of job status (job details) which was posted earlier by referring to their All Jobs list.
- Specific logged in user can also delete a particular job posted earlier by referring to their All Jobs list.
- User cannot append a job unless logged in.
- In All Jobs page, pagination is implementing, rendering 10 jobs on a page and the remaining ones on the next page.
- Newly registered user can update his/her profile in the Profile page. Here, user can update their name, last name, email and location and the profile get's saved in the users model.
- Additionally a stats page promoting user in visualizing the number of jobs applied and their status for each month in the form of bar and area charts.
- User can search jobs of his/her choice on All Jobs page by applying filters like search, search by status, search by type, search by sort. 
- Made use of global context using createContext and utilized useContext hook. Established a global state using useReducer hook. Rendering global Alert component.
- Logout option.
- Tech Stack Used :
  - Frontend : HTML-5, Normalized-CSS, Javascript ES-6, React.js, Recharts.
  - Backend :  Node.js, Express.js, JWT, Mongoose, MongoDB.
