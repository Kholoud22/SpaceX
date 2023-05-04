# SpaceX Launches

## Backend Project

- Inside backend\SpaceX folder
- set CustomerSupport.sln to be your startup project then run (ctrl+f5)
- The Project has UnitTesting using XUnit we can run test from Test tab in visual studio

**Note**

- please make sure the IDE you use is visual studio 2022
- please make sure it's running on "http://localhost:5115/" as that's the baseURL for frontend

**Includes**

- IoC / DI
- In-Memory Caching
- Testing
- Logging using Serilog
- Error handler Middleware
- Used MediatR

## Frontend Project

- Inside frontend\spacex folder
- npm install
- npm start

**Note**

- please make sure the Backend running on "http://localhost:5115/" if not please change the launch-api.js baseUrl variable to the right port

**Includes**

- React project that Includes multiple components (List - details)
- Pagination
- Used bootstrap

## To Enhance

- I think the project is small and 3 layers (API, Application, Infrastructure) will be enough but we could add common layer (to register services in it).
- we could add more components in FE like Error component the specific error and log errors in a nice and enhance the UI to look nicer.
